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
localStorage.setItem("dairyData", JSON.stringify(dairyData));

dairyData.map(function (ele) {
  var contain = document.querySelector("#items");
  var divProd = document.createElement("div");

  var divImg = document.createElement("div");
  divImg.setAttribute("id", "prodImage");
  var image = document.createElement("img");
  image.setAttribute("src", ele.imgUrl);

  divImg.append(image);

  var textContain = document.createElement("div");
  textContain.setAttribute("id", "inText");

  var h4 = document.createElement("h4");
  h4.textContent = ele.name;

  var minText = document.createElement("div");

  var quantity = document.createElement("div");
  quantity.textContent = ele.qty;
  var price = document.createElement("span");
  price.textContent = "Rs. " + ele.price;
  var btn = document.createElement("button");
  btn.textContent = "ADD";
  btn.setAttribute("id", "addBtn");

  minText.append(quantity, price, btn);
  textContain.append(h4, minText);
  divProd.append(divImg, textContain);
  contain.append(divProd);
});
