let subtotal = 0;
function addItem() {
  let item = document.getElementById("item").value;
  let price = parseFloat(document.getElementById("price").value);
  let qty = parseInt(document.getElementById("qty").value);
  let total = price * qty;
  subtotal += total;
  let table = document.getElementById("billTable");
  let row = table.insertRow();
  row.insertCell(0).innerHTML = item;
  row.insertCell(1).innerHTML = price;
  row.insertCell(2).innerHTML = qty;
  row.insertCell(3).innerHTML = total;
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("item").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
}
function calculateTotal() {
  let gst = subtotal * 0.18;
  let discount = parseFloat(document.getElementById("discount").value) || 0;

  let finalTotal = subtotal + gst - discount;

  document.getElementById("gst").innerText = gst.toFixed(2);
  document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);
}
