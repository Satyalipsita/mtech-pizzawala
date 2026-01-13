let selectedItem = "";
let selectedPrice = 0;

function orderNow(item, price) {
  selectedItem = item;
  selectedPrice = price;

  const phoneNumber = "91XXXXXXXXXX"; // WhatsApp number
  const message = `Hello, I want to order ${item} worth ₹${price}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

function payNow() {
  if (selectedPrice === 0) {
    alert("Please order an item first!");
    return;
  }

  const upiId = "yourupi@bank"; // replace with your UPI ID
  const name = "MTech Pizzawala";
  const note = selectedItem;

  const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${selectedPrice}&cu=INR&tn=${note}`;
  window.location.href = upiUrl;
}
