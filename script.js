<script>
function orderNow(item, price) {
  const phoneNumber = "917978900914"; // replace with your WhatsApp number
  const message = `Hello, I want to order:\nItem: ${item}\nPrice: ₹${price}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
</script>
