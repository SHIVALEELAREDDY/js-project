let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener("click", function () {
    menus.classList.add("active");
});

closeBtn.addEventListener("click", function () {
    menus.classList.remove("active");
})

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    }
  });


const menu = [
    { 
      id: 1, 
      title: "Chicken Lollipop",
       category: "starter", 
       price: 100, 
       img: "https://assets.limetray.com/assets/user_images/menus/compressed/1709545228_OAChickenDrumsticksLegPieceinChilliSauce.webp",
    
    },
    { 
      id: 2, 
      title: "Chicken Biryani", 
      category: "Dinner", 
      price: 150, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIycguxFgTpIN3L00tYQhJ2WkypXj5w_QkQ&s" 
    },
    { 
      id: 3, 
      title: "Chicken 65", 
      category: "starter", 
      price: 120, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpSWuX15EBWpTCmP0iLJ1ab8n4l8uC2AqYQ&s" 
    },
    { 
      id: 4, 
      title: "Chicken Shawarma", 
      category: "starter", 
      price: 200, 
      img: "https://kristineskitchenblog.com/wp-content/uploads/2024/07/chicken-shawarma-06-3.jpg"
    },
    { 
      id: 5, 
      title: "Veg Shawarma", 
      category: "Starter", 
      price: 180, 
      img: "https://vps029.manageserver.in/test/wp-content/uploads/2024/04/images-7.jpeg" 
    },
    { 
      id: 6, 
      title: "Paneer Tikka", 
      category: "starter", 
      price: 100, 
      img: "https://orders.popskitchen.in/storage/2024/09/image-358.png" 
    },
    { 
      id: 7, 
      title: "Veg Fried Rice", 
      category: "Lunch", 
      price: 100, 
      img: "https://sangskitchen.b-cdn.net/wp-content/uploads/2018/09/veg-fried-rice-front-500x375.png"
    },
    { 
      id: 8, 
      title: "Mushroom Chilli", 
      category: "Starter", 
      price: 140, 
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/12/chilli-mushroom-stir-fry-500x375.jpg" },
    { 
      id: 9, 
      title: "Masala Rice", 
      category: "lunch", 
      price: 120, 
      img: "https://static.toiimg.com/thumb/86415772.cms?imgsize=69484&width=800&height=800" 
    },
    {
      id:10,
      title:"Mojito",
      category:"drinks",
      price:60,
      img:"https://www.saveur.com/uploads/2007/02/SAVEUR_Mojito_1149-Edit-scaled.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440"
    },
    {
      id:11,
      title:" Blue mojito",
      category:"drinks",
      price:80,
      img:"https://cookingwithjanica.com/wp-content/uploads/2023/06/blue_mojito.jpg"
    },
    {
      id:12,
      title:" Butter milk",
      category:"drinks",
      price:50,
      img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/01/masala-chaas-featured.jpg"
    },
    {
      id:13,
      title:"Kitkat milkshake",
      category:"drinks",
      price:120,
      img:"https://img.freepik.com/premium-photo/kitkat-chocolate-milkshake-topped-with-ice-cream-choco-chips-served-glass-rustic-wooden-backgrounda-refreshing-drink-summer-days-selective-focus-top_726363-415.jpg"
    },
    {
      id:14,
      title:"Strawberry milkshake",
      category:"drinks",
      price:120,
      img:"https://www.unicornsinthekitchen.com/wp-content/uploads/2018/08/Strawberry-Milkshake-square.jpg"
    },
    {
      id:14,
      title:"Oreo milkshake",
      category:"drinks",
      price:120,
      img:"https://eatingglutenanddairyfree.com/wp-content/uploads/2020/02/EGADFHomemadeoreomilkshake6.jpg"
    },
    {
      id:15,
      title:"Pineapple juice",
      category:"drinks",
      price:50,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrs1gSf9JvvQAFxGoAxS7nXKgU7I37_gOVw&s"
    },
    {
      id:16,
      title:"Choclote juice",
      category:"drinks",
      price:100,
      img:"https://t4.ftcdn.net/jpg/07/04/98/39/360_F_704983944_1zZKWb6ZeD0A1Xih0m403ezMSIu36TCX.jpg"
    },
    {
      id:17,
      title:"Mango juice",
      category:"drinks",
      price:70,
      img:"https://www.whiskaffair.com/wp-content/uploads/2021/06/Mango-Juice-2-3-500x500.jpg"
    },
    { 
      id: 18, 
      title: "Masala Rice", 
      category: "Dinner", 
      price: 120, 
      img: "https://static.toiimg.com/thumb/86415772.cms?imgsize=69484&width=800&height=800" 
    },
    { 
      id: 19, 
      title: "Veg Fried Rice", 
      category: "Dinner", 
      price: 100, 
      img: "https://sangskitchen.b-cdn.net/wp-content/uploads/2018/09/veg-fried-rice-front-500x375.png"
    },
    { 
      id: 20, 
      title: "Chicken Biryani", 
      category: "lunch", 
      price: 150, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIycguxFgTpIN3L00tYQhJ2WkypXj5w_QkQ&s" 
    },
    { 
      id: 21, 
      title: "Momos", 
      category: "starter", 
      price: 100, 
      img: "https://i.pinimg.com/736x/8b/c5/93/8bc59360cb5c2689b91a3163640a2bf7.jpg" 
    },
    { 
      id: 22, 
      title: "Sandwich", 
      category: "starter", 
      price: 100, 
      img: "https://cdn.tarladalal.com/members/9306/procstepimgs/grilled-veg-pizza-sandwich-recipe-(12)-7-192275.jpg" 
    },
    { 
      id: 23, 
      title: "Gobi-65", 
      category: "starter", 
      price: 100, 
      img: "https://www.awesomecuisine.com/wp-content/uploads/2008/03/cauliflower_65.jpg" 
    },
    { 
      id: 24, 
      title: "panner fried rice", 
      category: "lunch",
      price: 100, 
      img: "https://i0.wp.com/khaddoroshik.com/wp-content/uploads/2024/06/Paneer-Fried-Rice-Quick-and-Delicious-Vegetarian-Fried-Rice-Recipe.webp" 
    },
    { 
      id: 25, 
      title: "panner fried rice", 
      category: "Dinner",
      price: 100, 
      img: "https://i0.wp.com/khaddoroshik.com/wp-content/uploads/2024/06/Paneer-Fried-Rice-Quick-and-Delicious-Vegetarian-Fried-Rice-Recipe.webp" 
    },
    { 
      id: 26, 
      title: "Gobi rice", 
      category: "Dinner",
      price: 100, 
      img: "https://vismaifood.com/storage/app/uploads/public/c5d/83b/985/thumb__700_0_0_0_auto.jpg" 
    },
    { 
      id: 27, 
      title: "Gobi rice", 
      category: "lunch",
      price: 100, 
      img: "https://vismaifood.com/storage/app/uploads/public/c5d/83b/985/thumb__700_0_0_0_auto.jpg" 
    },
    { 
      id: 28, 
      title: "Curd rice", 
      category: "lunch",
      price: 60, 
      img: "https://www.indianveggiedelight.com/wp-content/uploads/2022/10/curd-rice.jpg" 
    },
    { 
      id: 29, 
      title: "Curd rice", 
      category: "Dinner",
      price: 60, 
      img: "https://www.indianveggiedelight.com/wp-content/uploads/2022/10/curd-rice.jpg" 
    },
    { 
      id: 30, 
      title: "Jeera rice", 
      category: "Dinner",
      price: 80, 
      img: "https://priyafoods.com/cdn/shop/files/JEERARICE_2.jpg?v=1701948113" 
    },
    { 
      id: 31, 
      title: "Jeera rice", 
      category: "lunch",
      price: 80, 
      img: "https://priyafoods.com/cdn/shop/files/JEERARICE_2.jpg?v=1701948113" 
    },
    { 
      id: 32, 
      title: "pulao rice", 
      category: "lunch",
      price: 80, 
      img: "https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg" 
    },
    { 
      id: 33, 
      title: "pulao rice", 
      category: "Dinner",
      price: 80, 
      img: "https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg" 
    },
    { 
      id: 34, 
      title: "veg biryani", 
      category: "Dinner",
      price:150, 
      img: "https://static.toiimg.com/thumb/53098310.cms?width=1200&height=900" 
    },
    { 
      id: 35, 
      title: "veg biryani", 
      category: "lunch",
      price:150, 
      img: "https://static.toiimg.com/thumb/53098310.cms?width=1200&height=900" 
    },
    
];
window.addEventListener("DOMContentLoaded", function () {
    displayMenusitem(menu);
});

function displayMenusitem(menuItems) {
    let displayMenus = menuItems.map(function (item) {
        return `<div class="img_cards">
                    <img src="${item.img}" alt="${item.title}">
                    <p class="price">Only ₹${item.price}</p>
                    <p>${item.title}</p>
                </div>`;
    }).join(""); 

    const sectionCenter = document.querySelector('.menus_item_continer');
    sectionCenter.innerHTML = displayMenus;
}


const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            return menuItem.category.toLowerCase() === category.toLowerCase();
        });

        if (category === "all") {
            displayMenusitem(menu);
        } else {
            displayMenusitem(menuCategory);
        }
    });
});

const countersEl = document.querySelectorAll('.num');

countersEl.forEach((countersEl)=>{
  countersEl.innerText = "0";
  increamentCounter();

  function increamentCounter(){
    let currentNum = +countersEl.innerText;
    const dataceil = countersEl.getAttribute("data-ceil");
    const increament = dataceil / 15;
    currentNum = Math.ceil(currentNum+increament);

    if(currentNum<dataceil){
      countersEl.innerText = currentNum;
      setTimeout(increamentCounter, 70);
    }
    else{
      countersEl.innerText = dataceil
    }
  }
});
const nav = document.querySelector("header")

window.addEventListener("scroll",function(){
  
  if(this.document.documentElement.scrollTop> 20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky")
  }
})
const parallex = document.querySelector('#showcase')
window.addEventListener("scroll",function(){
  let offset = this.window.pageYOffset;
  parallex.style.backgroundPositionY = offset * 0.7 + "px";
})

// let openshopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listcard = document.querySelector('.listcard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// if (openshopping && closeShopping) {
//     openshopping.addEventListener('click', () => {
//         body.classList.add('active');
//     });

//     closeShopping.addEventListener('click', () => {
//         body.classList.remove('active');
//     });
// } else {
//     console.error("Error: Missing '.shopping' or '.closeShopping' element in the HTML.");
// }


