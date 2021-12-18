var dryFruits = [
  {
    name: "Cashew - 100gm",
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/577/original/data?1635085485",
    price: "99",
    qty: "100 gms",
  },

  {
    name: "Cashew Tukda - 100gm",
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/580/original/data?1635086672",
    price: "92",
    qty: "100 gms",
  },

  {
    name: "Walnut - 100gms",
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/583/original/data?1635137039",
    price: "175",
    qty: "100 gms",
  },

  {
    name: "Pista Salted - 100gms",
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/586/original/data?1635141850",
    price: "122",
    qty: "100 gms",
  },

  {
    name: "Pista Kernel - 100gms",
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/588/original/data?1635142184",
    price: "186",
    qty: "100 gms",
  },
];
var cart = JSON.parse(localStorage.getItem("cartData")) || [];
dryFruits.map(function (ele, index) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", ele.imgUrl);

  var nameBox = document.createElement("div");
  nameBox.setAttribute("class", "namebox");
  var name = document.createElement("span");
  name.setAttribute("class", "name");
  name.innerText = ele.name;
  nameBox.append(name);

  var botBox = document.createElement("div");
  botBox.setAttribute("class", "botbox");
  var priceBox = document.createElement("div");
  var qty = document.createElement("span");
  qty.setAttribute("class", "qty");
  qty.innerText = ele.qty;
  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(qty, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';

  btn.addEventListener("click", function () {
    add(index);
  });
  botBox.append(priceBox, btn);

  var display = document.querySelector("#itemsdry");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});

function add(index) {
  console.log("here" + index);
  cart.push(dryFruits[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}
// data of fruits append
fruitData = [
  {
    imgUrl:
      "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png",
    name: "Banana Robusta",
    qty: "1 kg",
    price: "29",
  },
  {
    imgUrl:
      "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN24.png",
    name: "Banana Elaichi/ Yellaki",
    qty: "1 kg",
    price: "39",
  },
  {
    imgUrl:
      "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCHI13.png",
    name: "Chikoo",
    qty: "1 kg",
    price: "49",
  },
  {
    imgUrl:
      "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FGRA42.png",
    name: "Grapes Green",
    qty: "1 kg",
    price: "70",
  },
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/233/original/data?1609860341",
    name: "Grapes Black",
    qty: "1 kg",
    price: "90",
  },
];
fruitData.map(function (ele, index) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", ele.imgUrl);

  var nameBox = document.createElement("div");
  nameBox.setAttribute("class", "namebox");
  var name = document.createElement("span");
  name.setAttribute("class", "name");
  name.innerText = ele.name;
  nameBox.append(name);

  var botBox = document.createElement("div");
  botBox.setAttribute("class", "botbox");
  var priceBox = document.createElement("div");
  var qty = document.createElement("span");
  qty.setAttribute("class", "qty");
  qty.innerText = ele.qty;
  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(qty, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';

  botBox.append(priceBox, btn);
  btn.addEventListener("click", function () {
    add(index);
  });

  var display = document.querySelector("#itemsf");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});
function add(index) {
  console.log("here" + index);
  cart.push(fruitData[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}
// data of vegetables append
var veggie = [
  {
    name: "Carrot Orange",
    imgUrl: "https://i.postimg.cc/rmYTMXZF/carrot.png",
    price: "30",
    qty: "300 gm",
  },

  {
    name: "Sweet Corn",
    imgUrl: "https://i.postimg.cc/pLxL0vgg/sweet-corn.png",
    price: "14",
    qty: "1 pc",
  },

  {
    name: "Cabbage Red",
    imgUrl: "https://i.postimg.cc/HkQT5NnB/cabbage-red.png",
    price: "37",
    qty: "1 pc",
  },

  {
    name: "Basil Italian",
    imgUrl: "https://i.postimg.cc/PxffdMtK/basil-italian.png",
    price: "11",
    qty: "50 gm",
  },

  {
    name: "Mushroom",
    imgUrl: "https://i.postimg.cc/XJXM21NM/mushroom.png",
    price: "37",
    qty: "1 unit",
  },
];
veggie.map(function (ele, index) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", ele.imgUrl);

  var nameBox = document.createElement("div");
  nameBox.setAttribute("class", "namebox");
  var name = document.createElement("span");
  name.setAttribute("class", "name");
  name.innerText = ele.name;
  nameBox.append(name);

  var botBox = document.createElement("div");
  botBox.setAttribute("class", "botbox");
  var priceBox = document.createElement("div");
  var qty = document.createElement("span");
  qty.setAttribute("class", "qty");
  qty.innerText = ele.qty;
  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(qty, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);
  btn.addEventListener("click", function () {
    add(index);
  });

  var display = document.querySelector("#itemsv");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});

function add(index) {
  console.log("here" + index);
  cart.push(veggie[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// data append for hydroponics
hydroData = [
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/169/original/data?1599847670",
    name: "Celery(Hydroponics)",
    qty: "15-200Gm",
    price: "107 ",
  },
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/631/original/data?1635766646",
    name: "Mixed lettuice (Hydroponics)",
    qty: "1 punnet (approx 10gm)",
    price: "69",
  },
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/103/original/data?1639301565",
    name: "Kale Curly (Aquaponics)",
    qty: "200Gm",
    price: "129",
  },
];
hydroData.map(function (ele, index) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", ele.imgUrl);

  var nameBox = document.createElement("div");
  nameBox.setAttribute("class", "namebox");
  var name = document.createElement("span");
  name.setAttribute("class", "name");
  name.innerText = ele.name;
  nameBox.append(name);

  var botBox = document.createElement("div");
  botBox.setAttribute("class", "botbox");
  var priceBox = document.createElement("div");
  var qty = document.createElement("span");
  qty.setAttribute("class", "qty");
  qty.innerText = ele.qty;
  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(qty, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);
  btn.addEventListener("click", function () {
    add(index);
  });

  var display = document.querySelector("#itemsh");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});

function add(index) {
  console.log("here" + index);
  cart.push(hydroData[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// appending the data of dairy

var dairyData = [
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/394/original/data?1625864720",
    name: "ISKCON's A2 Cream Ghee",
    qty: "225ml",
    price: "375",
  },
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/367/original/data?1622452513",
    name: "ISKCON's A2 Bilano Ghee",
    qty: "500ml",
    price: "1250",
  },
];

dairyData.map(function (ele, index) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", ele.imgUrl);

  var nameBox = document.createElement("div");
  nameBox.setAttribute("class", "namebox");
  var name = document.createElement("span");
  name.setAttribute("class", "name");
  name.innerText = ele.name;
  nameBox.append(name);

  var botBox = document.createElement("div");
  botBox.setAttribute("class", "botbox");
  var priceBox = document.createElement("div");
  var qty = document.createElement("span");
  qty.setAttribute("class", "qty");
  qty.innerText = ele.qty;
  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(qty, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);

  btn.addEventListener("click", function () {
    add(index);
  });

  var display = document.querySelector("#itemsd");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});
function add(index) {
  console.log("here" + index);
  cart.push(dairyData[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// appending the herb data
herbData = [
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/419/original/data?1635147438",
    name: "Colocasia Leaves",
    qty: "1pcs",
    price: "4",
  },
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/602/original/data?1635155510",
    name: "Betel Leafs",
    qty: "12 pcs",
    price: "21",
  },
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/127/original/data?1603884053",
    name: "Masala Combo",
    qty: "12 Pkt",
    price: "13",
  },
];

herbData.map(function (ele, index) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", ele.imgUrl);

  var nameBox = document.createElement("div");
  nameBox.setAttribute("class", "namebox");
  var name = document.createElement("span");
  name.setAttribute("class", "name");
  name.innerText = ele.name;
  nameBox.append(name);

  var botBox = document.createElement("div");
  botBox.setAttribute("class", "botbox");
  var priceBox = document.createElement("div");
  var qty = document.createElement("span");
  qty.setAttribute("class", "qty");
  qty.innerText = ele.qty;
  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(qty, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);
  btn.addEventListener("click", function () {
    add(index);
  });

  var display = document.querySelector("#itemsherb");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});
function add(index) {
  console.log("here" + index);
  cart.push(herbData[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// appending the best deal data

bestDeal = [
  {
    name: "Sweet Corn",
    imgUrl: "https://i.postimg.cc/pLxL0vgg/sweet-corn.png",
    price: "14",
    qty: "1 pc",
  },
  {
    imgUrl:
      "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FGRA42.png",
    name: "Grapes Green",
    qty: "1 kg",
    price: "70",
  },
  {
    name: "Cashew - 100gm",
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/577/original/data?1635085485",
    price: "99",
    qty: "100 gms",
  },
  {
    imgUrl:
      "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FGRA42.png",
    name: "Grapes Green",
    qty: "1 kg",
    price: "70",
  },
  {
    imgUrl:
      "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/169/original/data?1599847670",
    name: "Celery(Hydroponics)",
    qty: "15-200Gm",
    price: "107 ",
  },
];
bestDeal.map(function (ele, index) {
  var div = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", ele.imgUrl);

  var nameBox = document.createElement("div");
  nameBox.setAttribute("class", "namebox");
  var name = document.createElement("span");
  name.setAttribute("class", "name");
  name.innerText = ele.name;
  nameBox.append(name);

  var botBox = document.createElement("div");
  botBox.setAttribute("class", "botbox");
  var priceBox = document.createElement("div");
  var qty = document.createElement("span");
  qty.setAttribute("class", "qty");
  qty.innerText = ele.qty;
  var price = document.createElement("span");
  price.setAttribute("class", "price");
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(qty, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);

  btn.addEventListener("click", function () {
    add(index);
  });
  var display = document.querySelector("#items");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});
function add(index) {
  console.log("here" + index);
  cart.push(bestDeal[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}
