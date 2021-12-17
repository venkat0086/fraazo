var dryFruits= [{
    name: "Cashew - 100gm",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/577/original/data?1635085485",
    price: "99",
    weight: "100 gms"
},

{
    name: "Cashew Tukda - 100gm",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/580/original/data?1635086672",
    price: "92",
    weight: "100 gms"
},

{
    name: "Walnut - 100gms",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/583/original/data?1635137039",
    price: "175",
    weight: "100 gms"
},

{
    name: "Pista Salted - 100gms",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/586/original/data?1635141850",
    price: "122",
    weight: "100 gms"
},

{
    name: "Pista Kernel - 100gms",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/588/original/data?1635142184",
    price: "186",
    weight: "100 gms"
},


]
dryFruits.map(function(ele) {
    var div = document.createElement('div');

    var img = document.createElement('img');
    img.setAttribute('src', ele.src);

    var nameBox = document.createElement('div');
    nameBox.setAttribute('class', 'namebox');
    var name = document.createElement('span');
    name.setAttribute('class', 'name')
    name.innerText = ele.name;
    nameBox.append(name);

    var botBox = document.createElement('div');
    botBox.setAttribute('class', 'botbox')
    var priceBox = document.createElement('div');
    var weight = document.createElement('span');
    weight.setAttribute('class', 'weight')
    weight.innerText = ele.weight;
    var price = document.createElement('span');
    price.setAttribute('class', 'price')
    price.innerText = '₹ ' + ele.price;
    var br = document.createElement('br');
    priceBox.append(weight, br, price);
    var btn = document.createElement('div');
    btn.setAttribute('class', 'btn');
    btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
    botBox.append(priceBox, btn)

    var display = document.querySelector('#items');
    div.append(img, nameBox, botBox);
     display.append(div);
    //document.querySelectorAll("#items").append(div);
    
    
})
