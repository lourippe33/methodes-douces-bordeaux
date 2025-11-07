import admin from "firebase-admin";
import nodemailer from "nodemailer";

// Chargement de la clé Firebase depuis Netlify (variable FIREBASE_SERVICE_ACCOUNT)
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Initialisation Firebase (sécurisée, évite la double init)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// Générateur de clé unique
function makeKey() {
  const part = () => Math.random().toString(36).substring(2, 6).toUpperCase();
  return `AGP-${part()}-${part()}-${part()}`;
}

// Configuration d’envoi d’email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lourippe33@gmail.com",
    pass: "TON_MOT_DE_PASSE_D_APPLICATION_GMAIL", // <-- mets ton mot de passe d’app ici
  },
});

// Fonction d’envoi d’e-mail
async function sendKeyEmail(to, key) {
  await transporter.sendMail({
    from: '"Programme AGP" <lourippe33@gmail.com>',
    to,
    subject: "Votre clé d'activation – Programme AGP",
    html: `
      <p>Bonjour 👋,</p>
      <p>Merci pour votre inscription au <strong>Programme AGP – 28 jours</strong>.</p>
      <p>Voici votre <strong>clé d'activation personnelle</strong> :</p>
      <p style="font-size:24px;font-weight:bold;">🔑 ${key}</p>
      <p>Ouvrez l'application AGP → Cliquez sur <strong>Activer mon accès</strong> → entrez la clé.</p>
      <p>À très vite,<br>Éric</p>
    `,
  });
}

// Handler HTTP Netlify
export async function handler(event) {
  // ✅ Permet à ThriveCart de tester l’URL → évite l’erreur 2xx
  if (event.httpMethod === "GET") {
    return { statusCode: 200, body: "onThrivePurchase alive ✅" };
  }

  try {
    const data = JSON.parse(event.body);

    // Récupération robuste de l’email envoyé par ThriveCart
    const email = data?.customer?.email || data?.customer_email || data?.email || null;

    if (!email) {
      return { statusCode: 400, body: "Email not found" };
    }

    // Génération de la clé
    const key = makeKey();

    // Stockage Firestore
    await db.collection("keys").add({
      email,
      key,
      status: "unused",
      createdAt: new Date(),
      source: "thrivecart",
    });

    // Envoi email
    await sendKeyEmail(email, key);

    return { statusCode: 200, body: "ok" };
  } catch (err) {
    console.error("🔥 ERROR:", err);
    return { statusCode: 500, body: "error" };
  }
}
