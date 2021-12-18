var Cart = JSON.parse(localStorage.getItem("cartData"));

console.log(Cart);
var sum = [];

Cart.map(function (ele) {
  var cartItems = document.querySelector("#cart-items");
  var cv = document.createElement("div");
  cv.setAttribute("id", "cart-value");
  var ci = document.createElement("div");
  ci.setAttribute("id", "cart-img");
  var cimg = document.createElement("img");
  cimg.setAttribute("src", ele.imgUrl);

  ci.append(cimg);

  var ct = document.createElement("div");
  ct.setAttribute("id", "cart-text");

  var h3 = document.createElement("h3");
  h3.textContent = ele.name;
  var par = document.createElement("p");
  par.textContent = ele.qty;
  var btn = document.createElement("button");
  btn.textContent = "Remove";

  ct.append(h3, par, btn);

  var cp = document.createElement("div");
  cp.setAttribute("id", "cart-price");
  cp.textContent = "Rs. " + ele.price;
  cv.append(ci, ct, cp);
  cartItems.append(cv);
});
var total = sum.reduce(function (ac, dc) {
  return Number(ac) + Number(dc);
});
document.querySelector("#totalprice").textContent = "₹ " + total;
document.querySelector("#btn-cpn").addEventListener("click", dis);
function dis() {
  var cp = document.querySelector("#cpn").value;
  console.log(cp);

  if (cp == "abc20") {
    var discount = total * 0.2;
    console.log(discount);
    document.querySelector("#disc-price").textContent = "-" + discount;
    var tp = total - discount;

    document.querySelector("#tp").textContent = "₹ " + tp;
    document.querySelector("#final-amt").textContent = "₹ " + tp;
  } else {
    alert("Entre valid Coupoun");
  }
}
