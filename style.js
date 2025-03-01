let openshopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

if (openshopping && closeShopping) {
    openshopping.addEventListener('click', () => {
        body.classList.add('active');
    });

    closeShopping.addEventListener('click', () => {
        body.classList.remove('active');
    });
} else {
    console.error("Error: Missing '.shopping' or '.closeShopping' element in the HTML.");
}

let products = [
    {
        id: 1, 
        name: 'Chicken Lollipop',
        price: 100, 
        img: "https://assets.limetray.com/assets/user_images/menus/compressed/1709545228_OAChickenDrumsticksLegPieceinChilliSauce.webp",
    },
    {
        id: 2, 
        name: 'Chicken Biryani', 
        price: 150, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIycguxFgTpIN3L00tYQhJ2WkypXj5w_QkQ&s", 
    },
    {
        id: 3, 
        name: 'Chicken 65',  
        price: 120, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpSWuX15EBWpTCmP0iLJ1ab8n4l8uC2AqYQ&s", 
    },
    { 
        id: 4, 
        name: 'Chicken Shawarma',  
        price: 200, 
        img: "https://kristineskitchenblog.com/wp-content/uploads/2024/07/chicken-shawarma-06-3.jpg",
      },
      { 
        id: 5, 
        name: 'Veg Shawarma',  
        price: 180, 
        img: "https://vps029.manageserver.in/test/wp-content/uploads/2024/04/images-7.jpeg",
      },
      { 
        id: 6, 
        name: 'Paneer Tikka',  
        price: 100, 
        img: "https://orders.popskitchen.in/storage/2024/09/image-358.png", 
      },
      { 
        id: 7, 
        name: 'Veg Fried Rice', 
        price: 100, 
        img: "https://sangskitchen.b-cdn.net/wp-content/uploads/2018/09/veg-fried-rice-front-500x375.png",
      },
      { 
        id: 8, 
        name: 'Mushroom Chilli', 
        price: 140, 
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/12/chilli-mushroom-stir-fry-500x375.jpg",
      },
      { 
        id: 9, 
        name: 'Masala Rice',  
        price: 120, 
        img: "https://static.toiimg.com/thumb/86415772.cms?imgsize=69484&width=800&height=800", 
      },
      {
        id:10,
        name:'Mojito',
        price:60,
        img:"https://www.saveur.com/uploads/2007/02/SAVEUR_Mojito_1149-Edit-scaled.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440",
      },
      {
        id:11,
        name:'Blue mojito',
        price:80,
        img:"https://cookingwithjanica.com/wp-content/uploads/2023/06/blue_mojito.jpg",
      },
      {
        id:12,
        name:'Butter milk',
        price:50,
        img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/01/masala-chaas-featured.jpg",
      },
      {
        id:13,
        name:'Kitkat milkshake',
        price:120,
        img:"https://img.freepik.com/premium-photo/kitkat-chocolate-milkshake-topped-with-ice-cream-choco-chips-served-glass-rustic-wooden-backgrounda-refreshing-drink-summer-days-selective-focus-top_726363-415.jpg",
      },
      {
        id:14,
        name:"Strawberry milkshake",
        price:120,
        img:"https://www.unicornsinthekitchen.com/wp-content/uploads/2018/08/Strawberry-Milkshake-square.jpg",
      },
      {
        id:14,
        name:"Oreo milkshake",
        price:120,
        img:"https://eatingglutenanddairyfree.com/wp-content/uploads/2020/02/EGADFHomemadeoreomilkshake6.jpg",
      },
      {
        id:15,
        name:"Pineapple juice",
        price:50,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrs1gSf9JvvQAFxGoAxS7nXKgU7I37_gOVw&s",
      },
      {
        id:16,
        name:"Choclote juice",
        price:100,
        img:"https://t4.ftcdn.net/jpg/07/04/98/39/360_F_704983944_1zZKWb6ZeD0A1Xih0m403ezMSIu36TCX.jpg",
      },
      {
        id:17,
        name:"Mango juice",
        price:70,
        img:"https://www.whiskaffair.com/wp-content/uploads/2021/06/Mango-Juice-2-3-500x500.jpg",
      },
      { 
        id: 18, 
        name: "Masala Rice",  
        price: 120, 
        img: "https://static.toiimg.com/thumb/86415772.cms?imgsize=69484&width=800&height=800", 
      },
      { 
        id: 19, 
        name: "Veg Fried Rice", 
        price: 100, 
        img: "https://sangskitchen.b-cdn.net/wp-content/uploads/2018/09/veg-fried-rice-front-500x375.png",
      },
      { 
        id: 20, 
        name: "Chicken Biryani", 
        price: 150, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIycguxFgTpIN3L00tYQhJ2WkypXj5w_QkQ&s", 
      },
      { 
        id: 21, 
        name: "Momos",  
        price: 100, 
        img: "https://i.pinimg.com/736x/8b/c5/93/8bc59360cb5c2689b91a3163640a2bf7.jpg", 
      },
      { 
        id: 22, 
        name: "Sandwich",  
        price: 100, 
        img: "https://cdn.tarladalal.com/members/9306/procstepimgs/grilled-veg-pizza-sandwich-recipe-(12)-7-192275.jpg", 
      },
      { 
        id: 23, 
        name: "Gobi-65", 
        price: 100, 
        img: "https://www.awesomecuisine.com/wp-content/uploads/2008/03/cauliflower_65.jpg",
      },
      { 
        id: 24, 
        name: "panner fried rice", 
        price: 100, 
        img: "https://i0.wp.com/khaddoroshik.com/wp-content/uploads/2024/06/Paneer-Fried-Rice-Quick-and-Delicious-Vegetarian-Fried-Rice-Recipe.webp",
      },
      { 
        id: 25, 
        name: "panner fried rice", 
        price: 100, 
        img: "https://i0.wp.com/khaddoroshik.com/wp-content/uploads/2024/06/Paneer-Fried-Rice-Quick-and-Delicious-Vegetarian-Fried-Rice-Recipe.webp", 
      },
      { 
        id: 26, 
        name: "Gobi rice", 
        price: 100, 
        img: "https://vismaifood.com/storage/app/uploads/public/c5d/83b/985/thumb__700_0_0_0_auto.jpg",
      },
      { 
        id: 27, 
        name: "Gobi rice", 
        price: 100, 
        img: "https://vismaifood.com/storage/app/uploads/public/c5d/83b/985/thumb__700_0_0_0_auto.jpg",
      },
      { 
        id: 28, 
        name: "Curd rice", 
        price: 60, 
        img: "https://www.indianveggiedelight.com/wp-content/uploads/2022/10/curd-rice.jpg",
      },
      { 
        id: 29, 
        name: "Curd rice", 
        price: 60, 
        img: "https://www.indianveggiedelight.com/wp-content/uploads/2022/10/curd-rice.jpg" ,
      },
      { 
        id: 30, 
        name: "Jeera rice", 
        price: 80, 
        img: "https://priyafoods.com/cdn/shop/files/JEERARICE_2.jpg?v=1701948113" ,
      },
      { 
        id: 31, 
        name: "Jeera rice", 
        price: 80, 
        img: "https://priyafoods.com/cdn/shop/files/JEERARICE_2.jpg?v=1701948113" ,
      },
      { 
        id: 32, 
        name: "pulao rice", 
        price: 80, 
        img: "https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg", 
      },
      { 
        id: 33, 
        name: "pulao rice", 
        price: 80, 
        img: "https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg" ,
      },
      { 
        id: 34, 
        name: "veg biryani", 
        price:150, 
        img: "https://static.toiimg.com/thumb/53098310.cms?width=1200&height=900", 
      },
      { 
        id: 35, 
        name: "veg biryani", 
        price:150, 
        img: "https://static.toiimg.com/thumb/53098310.cms?width=1200&height=900" ,
      },
];
let listcards =[];

function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addTocart($(ket))">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addTocart(key){
  if(listcard[key] == null){
    listcard[key] = products[key];
    listcard[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard(){
  listcard.innerHTML = '';
  let count = 0;
  let totalprice = 0;
  listcard.forEach((value, key)=>{
    totalprice = totalprice + value.price;
    count = count + value.quantity;

    if(value !=null){
      let newDiv = Document.createElement('li');
      newDiv.innerHTML = `
      <div><img src="image/${value.image}"/></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>${value.quantity}</div>
      <div>
           <button onclick="changeQuantity(${key},${value.quantity - 1})">-<button>
           <div>
      </div>
      `;
    }
  }) 
  total.innerText = totalprice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key,quantity){
  if(quantity == 0){
    delete listcard[key];
  }else{
    listcard[key].quantity = quantity;
    listcard[key].price = quantity * products[key].price;
  }
  reloadCard();
}

