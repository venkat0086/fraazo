var veggie = [
    {
        name: "Carrot Orange",
        src: "https://i.postimg.cc/rmYTMXZF/carrot.png",
        price: "30",
        weight: "300 gm"
    },

    {
        name: "Sweet Corn",
        src: "https://i.postimg.cc/pLxL0vgg/sweet-corn.png",
        price: "14",
        weight: "1 pc"
    },

    {
        name: "Cabbage Red",
        src: "https://i.postimg.cc/HkQT5NnB/cabbage-red.png",
        price: "37",
        weight: "1 pc"
    },

    {
        name: "Basil Italian",
        src: "https://i.postimg.cc/PxffdMtK/basil-italian.png",
        price: "11",
        weight: "50 gm"
    },

    {
        name:"Mushroom",
        src: "https://i.postimg.cc/XJXM21NM/mushroom.png",
        price: "37",
        weight: "1 unit"
    },

    {
        name: "Tamoto Cherry",
        src: "https://i.postimg.cc/TP3Y6920/tamoto-cherry.png",
        price: "45",
        weight: "200 gm"
    },

    {
        name: "Saver PT Combo",
        src: "https://i.postimg.cc/85FpFz6r/saver-pt-combo.png",
        price: "68",
        weight: "1+1 kg"
    },


    {
        name: "Saver PO Combo",
        src: "https://i.postimg.cc/bY7JtkLY/saver-po-combo.png",
        price: "49",
        weight: "1+1 kg"
    },


    {
        name: "3 kg POT Combo",
        src: "https://i.postimg.cc/jdBjyNXd/3kg-pot-combo.png",
        price: "99",
        weight: "1+1+1 kg"
    },

    {
        name: "Beans Flat",
        src: "https://i.postimg.cc/vTkGLF5S/beans-flat.png",
        price: "25",
        weight: "250 gm"
    },

    {
        name: "Green Pea",
        src: "https://i.postimg.cc/KYGhTvd8/green-pea.png",
        price: "30",
        weight: "500 gm"
    },

    {
        name: "Beans Chawli",
        src: "https://i.postimg.cc/SKhNvh3B/beans-chawli.png",
        price: "25",
        weight: "250 gm"
    }
]

veggie.map(function(ele){
    var div = document.createElement('div');

    var img = document.createElement('img');
    img.setAttribute('src',ele.src);

    var nameBox = document.createElement('div');
    nameBox.setAttribute('class', 'namebox');
    var name = document.createElement('span');
    name.setAttribute('class', 'name')
    name.innerText = ele.name;
    nameBox.append(name);

    var botBox = document.createElement('div');
    botBox.setAttribute('class','botbox')
    var priceBox = document.createElement('div');
    var weight = document.createElement('span');
    weight.setAttribute('class', 'weight')
    weight.innerText = ele.weight;
    var price = document.createElement('span');
    price.setAttribute('class', 'price')
    price.innerText = '₹ '+ ele.price;
    var br = document.createElement('br');
    priceBox.append(weight, br, price);
    var btn = document.createElement('div');
    btn.setAttribute('class', 'btn');
    btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
    botBox.append(priceBox, btn)

    var display = document.querySelector('#display');
    div.append(img,nameBox,botBox);
    display.append(div);

    console.log(ele);
})
console.log("Connected");
