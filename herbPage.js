function gotoabt() {
    window.location.href = "";
  }
  function gotoreg() {
    window.location.href = "signup.html";
  }
  function gotocart() {
    window.location.href = "";
  }
  function gotologin() {
    window.location.href = "signin.html";
  }

herbData=[
    {
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/419/original/data?1635147438",
        name:"Colocasia Leaves",
        qty:"1pcs",
        price:"4"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/602/original/data?1635155510",
        name:"Betel Leafs",
        qty:"12 pcs",
        price:"21"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/127/original/data?1603884053",
        name:"Masala Combo",
        qty:"12 Pkt",
        price:"13"
    }
]
localStorage.setItem("herbData",JSON.stringify(herbData));