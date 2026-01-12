function order(item) {
  const phone = "91XXXXXXXXXX"; // replace with your WhatsApp number
  const message = `Hello, I want to order ${item} from MTech Pizzawala`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
