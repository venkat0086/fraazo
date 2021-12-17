fruitData=[
    {
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png",
        name:"Banana Robusta",
        qty:"1 kg",
        price:"29"

    },{
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN24.png",
        name:"Banana Elaichi/ Yellaki",
        qty:"1 kg",
        price:"39"
    },{
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCHI13.png",
        name:"Chikoo",
        qty:"1 kg",
        price:"49"
    },{
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FGRA42.png",
        name:"Grapes Green",
        qty:"1 kg",
        price:"70"  
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/233/original/data?1609860341",
        name:"Grapes Black",
        qty:"1 kg",
        price:"90"  
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/369/original/data?1622631944",
        name:"Guava White Indian",
        qty:"1 kg",
        price:"110"  
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/395/original/data?1625917064",
        name:"Baby Orange",
        qty:"1 kg",
        price:"90"  
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/261/original/data?1612541635",
        name:"Pomegranate (Anar)",
        qty:"1 kg",
        price:"80" 
    }
]

localStorage.setItem("fruitData",JSON.stringify(fruitData));
      
   var cart= JSON.parse(localStorage.getItem("cartData"))||[];

fruitData.map(function(ele, index){
    var div = document.createElement('div');

    var img = document.createElement('img');
    img.setAttribute('src',ele.imgUrl);

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
    weight.innerText = ele.qty;
    var price = document.createElement('span');
    price.setAttribute('class', 'price')
    price.innerText = '₹ '+ ele.price;
    var br = document.createElement('br');
    priceBox.append(weight, br, price);
    var btn = document.createElement('div');
    btn.setAttribute('class', 'btn');
    btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
    btn.addEventListener("click", function(){
        add(index);
    });

    botBox.append(priceBox, btn)
   
    var display = document.querySelector('#display');
    div.append(img,nameBox,botBox);
    display.append(div);

    
})

function add(index){
    cart.push(fruitData[index]);
    localStorage.setItem("cartData",JSON.stringify(cart)); 
}
