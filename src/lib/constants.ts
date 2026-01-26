// Site-wide constants
export const PHONE = {
  number: "695 512 838",
  raw: "695512838",
  international: "+34695512838",
  display: "695 512 838",
} as const;

export const WHATSAPP_URL = `https://wa.me/34${PHONE.raw}`;
export const PHONE_URL = `tel:${PHONE.international}`;

export const SITES = {
  es: 'https://fontanero.barcelona',
  en: 'https://plumber.barcelona',
} as const;

export const OPENPANEL_CLIENT_ID = '0708e62d-df2f-4bfc-8c27-c9cabb7ebe46';
// Client Secret (for server-side use only): sec_09e66fecc929dd995053
