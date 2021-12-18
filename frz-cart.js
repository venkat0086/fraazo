var Cart=JSON.parse(localStorage.getItem("cartData"));

console.log(Cart);
 var sum=[];

Cart.map(function (ele) {
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
    var weight = document.createElement("span");
    weight.setAttribute("class", "weight");
    weight.innerText = ele.qty;
    var price = document.createElement("span");
    price.setAttribute("class", "price");
    price.innerText = "Rs. " + ele.price;
    sum.push(ele.price);
    var br = document.createElement("br");
    priceBox.append(weight, br, price);
    var btn = document.createElement("div");
    btn.setAttribute("class", "btn");
    btn.innerHTML = "Remove";
    botBox.append(priceBox, btn);
  
    var display = document.querySelector("#cart-main");
    div.append(img, nameBox, botBox);
    display.append(div);
    //document.querySelectorAll("#items").append(div);
  });
  var total = sum.reduce(function(ac,dc){
      return Number(ac)+Number(dc);
  })
  document.querySelector("#totalprice").textContent="₹ "+total; 
   document.querySelector("#btn-cpn").addEventListener("click",dis);
   function dis(){
    var cp =document.querySelector("#cpn").value;
    console.log(cp);
      
  if (cp=="abc20"){
    var discount=total*0.2; 
    console.log(discount);
    document.querySelector("#disc-price").textContent="-"+discount;
    var tp=total-discount;

    document.querySelector("#tp").textContent="₹ "+tp;
    document.querySelector("#final-amt").textContent="₹ "+tp;
}
else {
    alert("Entre valid Coupoun");
}

   }
  
