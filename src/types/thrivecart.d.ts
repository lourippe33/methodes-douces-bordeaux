declare module 'react' {
  interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    'data-thrivecart-account'?: string;
    'data-thrivecart-tpl'?: string;
    'data-thrivecart-product'?: string;
  }
}

export {};
