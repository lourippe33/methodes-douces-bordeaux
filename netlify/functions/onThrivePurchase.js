import admin from "firebase-admin";
import nodemailer from "nodemailer";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

function makeKey() {
  const part = () => Math.random().toString(36).substring(2, 6).toUpperCase();
  return `AGP-${part()}-${part()}-${part()}`;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lourippe33@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendKeyEmail(to, key) {
  await transporter.sendMail({
    from: '"Programme AGP" <lourippe33@gmail.com>',
    to,
    subject: "Votre clé d'activation – Programme AGP",
    html: `
    <p>Bonjour,</p>
    <p>Merci pour votre inscription au <strong>Programme AGP – 28 jours</strong>.</p>
    <p>Voici votre <strong>clé d'activation personnelle</strong> :</p>
    <p style="font-size:24px;font-weight:bold;">🔑 ${key}</p>
    <p>Ouvrez l'application AGP → cliquez sur « Activer mon accès » → entrez la clé.</p>
    <p>À très vite,<br>Éric</p>`
  });
}

export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);
    const email = data?.customer?.email || data?.email;
    if (!email) return { statusCode: 400, body: "Email not found" };

    const key = makeKey();
    await db.collection("keys").add({ email, key, status: "unused", createdAt: new Date() });

    await sendKeyEmail(email, key);

    return { statusCode: 200, body: "ok" };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "error" };
  }
}
