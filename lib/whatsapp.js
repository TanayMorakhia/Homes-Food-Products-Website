export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918586951412";

export const defaultWhatsAppMessage =
  "Hello Homes Food Products, I would like to know more about your products.";

export function createWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createProductMessage(productName) {
  return `Hello Homes Food Products, I would like to order/enquire about ${productName}. Please share availability, pack size, and price.`;
}

export function createInquiryMessage({ name, phone, type, message }) {
  return [
    "Hello Homes Food Products, I have an inquiry.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Order Type: ${type}`,
    `Message: ${message || "Please contact me with details."}`,
  ].join("\n");
}
