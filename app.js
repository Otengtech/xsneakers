const mobileMenu = document.querySelector(".mobile");

function showMobile() {
  if (mobileMenu.style.display === "") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "";
  }
}

function hideMobile() {
  mobileMenu.style.display = "";
}

const loginbtn = document.querySelector(".login");
const signupbtn = document.querySelector(".signup");
const log = document.querySelector(".signup_login");

function login() {
  if (loginbtn.style.display === "") {
    loginbtn.style.display = "flex";
    mobileMenu.style.display = "";
  } else {
    loginbtn.style.display = "";
  }
}

function signup() {
  if (signupbtn.style.display === "") {
    signupbtn.style.display = "flex";
    mobileMenu.style.display = "";
  } else {
    signupbtn.style.display = "";
  }
}

document.getElementById("close").addEventListener("click", () => {
  loginbtn.style.display = "";
  mobileMenu.style.display = "flex";
});
document.getElementById("exit").addEventListener("click", () => {
  signupbtn.style.display = "";
  mobileMenu.style.display = "flex";
});

function signup_login() {
  signupbtn.style.display = "";
  loginbtn.style.display = "flex";
}

const cartPage = document.querySelector(".cart");

function showCart() {
  if (cartPage.style.display === "") {
    cartPage.style.display = "block";
  } else {
    cartPage.style.display = "";
  }
}

function hideCart() {
  cartPage.style.display = "";
}

// hide and show login page
const loginPage = document.querySelector(".login-page");
function showLogin() {
  if (loginPage.style.display === "") {
    loginPage.style.display = "flex";
  } else {
    loginPage.style.display = "";
  }
}
// hide and show signin page
const signinPage = document.querySelector(".signin-page");
function showSignup() {
  if (signinPage.style.display === "") {
    signinPage.style.display = "flex";
  } else {
    signinPage.style.display = "";
  }
}

function home() {
  const target = document.getElementById("hero");
  let scrollPosition = target.offsetTop;
  window.scrollTo({ top: scrollPosition, behavior: "smooth" });
}
function shop() {
  const position = document.querySelector(".item-space");
  let positionPosition = position.offsetTop;
  window.scrollTo({ top: positionPosition, behavior: "smooth" });
}
function about() {
  const footer = document.getElementById("footer");
  let footerPosition = footer.offsetTop;
  window.scrollTo({ top: footerPosition, behavior: "smooth" });
}

// phone toggle menu
const menu = document.querySelector(".toggle-menu");
function showMenu() {
  menu.style.display = "flex";
}
function closeMenu() {
  menu.style.display = "";
}

// working on product objects

const sneakers = [
  {
    id: 0,
    image: "Nike AIR Max 1.webp",
    name: "Nike AIR Max 1",
    price: "300",
  },
  {
    id: 1,
    image: "Air Griffey Max 1.webp",
    name: "Air Max",
    price: "320",
  },
  {
    id: 2,
    image: "Air Jordan 13.webp",
    name: "Air Jordan 13",
    price: "400",
  },
  {
    id: 3,
    image: "Air Jordan Black.webp",
    name: "Jordan Black",
    price: "440",
  },
  {
    id: 4,
    image: "Air Jordan 4.webp",
    name: "Jordan 4 OG",
    price: "600",
  },
  {
    id: 5,
    image: "Jordan 9 Retro.webp",
    name: "Jordan 4",
    price: "200",
  },
  {
    id: 6,
    image: "Jordan OG.webp",
    name: "Jordan OG",
    price: "250",
  },
  {
    id: 7,
    image: "Nike Air Force 1 Red.webp",
    name: "Nike Air Force",
    price: "350",
  },
  {
    id: 8,
    image: "Nike Air Force 1 Panda.webp",
    name: "Nike Air Force 1",
    price: "500",
  },
  {
    id: 9,
    image: "Nike Air Max 96.webp",
    name: "Nike Air Max 96",
    price: "490",
  },
  {
    id: 10,
    image: "Nike X Air Force 1.webp",
    name: "Nike X Air Force",
    price: "700",
  },
  {
    id: 11,
    image: "White Air Force 1.webp",
    name: "White Air Force",
    price: "670",
  },
];

const itemArea = document.querySelector(".items-container");

displayItems();

function displayItems() {
  sneakers.forEach((sneaker) => {
    itemArea.innerHTML += `
       <div style="box-shadow: 0 0 rgba(255,255,255,0.5)" class="flex flex-col items-center w-4/5
        relative border duration-500 cursor-pointer hover:scale-105 justify-center">
         <img class="w-full border border-slate-400" src="${sneaker.image}" />
         <div class="flex flex-col w-full bg-black items-center justify-center">
           <p class="my-0.5 md:my-2 text-center text-yellow-400">${sneaker.name}</p>
           <h2 class="my-0.5 md:my-2 text-center text-yellow-400">$${sneaker.price}</h2>
           <div class="mb-8 md:mb-12 flex">
             <i class="fa-solid fa-star text-yellow-400 text-xs mx-0.5"></i>
             <i class="fa-solid fa-star text-yellow-400 text-xs mx-0.5"></i>
             <i class="fa-solid fa-star text-yellow-400 text-xs mx-0.5"></i>
             <i class="fa-solid fa-star text-yellow-400 text-xs mx-0.5"></i>
             <i class="fa-solid fa-star text-yellow-400 text-xs mx-0.5"></i>
           </div>
         </div>
         <button class="bg-yellow-400 text-black absolute bottom-0 right-0 w-full text-sm py-1 px-2.5 md:py-3 md:px-4 " onclick="addItem(${sneaker.id})">Add To Cart</button>
       </div>
     `;
  });
}

const itemSpace = document.getElementById("cart-space");
const itemCounter = document.getElementById("itemCounter");
const totalAmount = document.getElementById("amount");

// dealing with adding items to cart
const cart = [];

const popUp = document.querySelector(".pop-up");
const b = document.getElementById("bbb");

function addItem(key) {
  const product = sneakers.find((s) => s.id === key);
  if (cart.some((sneaker) => sneaker.id === product.id)) {
    alert("Item is already in the cart");
  } else {
    cart.push(product);
    itemCounter.innerText++;
    updateCart();
  }
}

// Update Cart Display
function updateCart() {
  itemSpace.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += parseFloat(item.price);
    itemSpace.innerHTML += `
    
        <div class="grid grid-cols-3 gap-3  mb-4 justify-between">
              <div class="w-20"><img src="${item.image}"></div>
              <h3 class="text-yellow-400 font-bold">$${item.price}</h3>
              <div><button class="bg-yellow-400 text-lg py-1 px-2 rounded-xl cursor-pointer" onclick="removeCart(${item.id})">Remove</button></div>
          </div>
      `;
  });

  // Update Total
  totalAmount.innerHTML = `$${total.toFixed(2)}`;
}

// Remove Item from Cart

function removeCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    itemCounter.innerText = cart.length;
    updateCart();
  }
}

function updateQuantity(productId, quantity) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity = parseInt(quantity); // Update the item's quantity
    updateCart(); // Re-render the cart
  }
}
