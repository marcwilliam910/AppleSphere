//log out
const logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "../login_user/Login.html";
});

// user profile
const profile = document.querySelector(".profile");
profile.addEventListener("click", () => {
  window.location.href = "../user_profile/user_profile.html";
});

// for cart clicked
let addToCartBtn = document.querySelector(".cart-header");
let cartSideBar = document.getElementById("cart-side-bar");
let closeSideBar = document.querySelector(".close-cart-sidebar");

addToCartBtn.addEventListener("click", function () {
  cartSideBar.classList.add("show-cart-sidebar");
});

closeSideBar.addEventListener("click", function () {
  cartSideBar.classList.remove("show-cart-sidebar");
});

// navbar category clicked
const sections = document.querySelectorAll(".item-container, footer");
const navLinks = document.querySelectorAll(".left-side a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((section, index) => {
    const offset = section.offsetTop - 140;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    // Check if scroll position is within the section's range
    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`.navbar-categ[href*=${id}]`)
        .classList.add("active");
    } else if (index === 0 && scrollY < offset) {
      // If it's the first section and scroll position is not within its range, remove active class
      document
        .querySelector(`.navbar-categ[href*=${id}]`)
        .classList.remove("active");
    }
  });
});

// slider landing page
const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");

let autoSlideInterval;
let slideIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = 2;
  } else if (index > 2) {
    index = 0;
  }

  slideIndex = index;
  const translateValue = -slideIndex * 100 + "%";
  slides.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

slides.addEventListener("mouseover", stopAutoSlide);
slides.addEventListener("mouseout", startAutoSlide);
nextBtn.addEventListener("mouseover", stopAutoSlide);
nextBtn.addEventListener("mouseout", startAutoSlide);
prevBtn.addEventListener("mouseover", stopAutoSlide);
prevBtn.addEventListener("mouseout", startAutoSlide);

// Start automatic sliding initially
startAutoSlide();

//products

//for latest product
const latestProducts = document.getElementsByClassName("product-container");

const latestItem = [
  {
    id: 1,
    image: "/img_products/AirPods/airpods5.png",
    name: "AirPods Max",
    price: "₱32,990",
  },
  {
    id: 2,
    image: "/img_products/latest product/airpods_new2.jpg",
    name: "AirPods (3rd Gen)",
    price: "₱10,990",
  },
  {
    id: 3,
    image: "/img_products/latest product/watch_new2.jpg",
    name: "Apple Watch Series 9",
    price: "₱26,490",
  },
  {
    id: 4,
    image: "/img_products/latest product/watch_new.jpg",
    name: "Apple Watch Ultra 2",
    price: "₱54,990",
  },
  {
    id: 5,
    image: "/img_products/latest product/iphone_new2.jpg",
    name: "iPhone 15",
    price: "₱61,990",
  },
  {
    id: 6,
    image: "/img_products/latest product/iphone_new.jpg",
    name: "iPhone 15 Pro",
    price: "₱76,990",
  },
  {
    id: 7,
    image: "/img_products/latest product/ipad_new.jpg",
    name: "iPad Pro (6th Gen)",
    price: "₱55,990",
  },
  {
    id: 8,
    image: "/img_products/latest product/mac_new.png",
    name: "MacBook Air 15 -inch with M2 chip",
    price: "₱89,990",
  },
];

latestItem.forEach((value) => {
  const newDIv = document.createElement("div");

  newDIv.innerHTML = `<div class="product-item">
                        <img src="${value.image}" class="product-image"/>
                        <h3 class="product-name">${value.name}</h3>
                        <span class="price">${value.price}</span>
                        <i class="fa-solid fa-cart-plus cart"></i>
                      </div>`;
  latestProducts[0].appendChild(newDIv);
});

// mac products
const macProducts = document.getElementsByClassName("mac-product");

const macItem = [
  {
    id: 1,
    image: "/img_products/MacBook/mac1.png",
    name: "MacBook Air 13 -inch with M1 chip",
    price: "₱64,990",
  },
  {
    id: 2,
    image: "/img_products/MacBook/mac2.jpg",
    name: "Macbook Air 15 -inch",
    price: "₱82,990",
  },
  {
    id: 3,
    image: "/img_products/MacBook/mac3.png",
    name: "MacBook Air 13 -inch",
    price: "₱76,990",
  },
  {
    id: 4,
    image: "/img_products/Macbook/mac4.png",
    name: "Macbook Pro 13 -inch",
    price: "₱86,990",
  },
  {
    id: 5,
    image: "/img_products/MacBook/mac5.png",
    name: "MacBook Pro",
    price: "₱80,990",
  },
  {
    id: 6,
    image: "/img_products/MacBook/mac6.png",
    name: "iMac",
    price: "₱85,990",
  },
];

macItem.forEach((value) => {
  const newDIv = document.createElement("div");

  newDIv.innerHTML = ` <div class="mac-item item">
                        <img src="${value.image}" class="image"/>
                        <h3 class="product-name">${value.name}</h3>
                        <span class="price">${value.price}</span>
                        <i class="fa-solid fa-cart-plus cart"></i>
                      </div>`;

  macProducts[0].appendChild(newDIv);
});

// iphone products
const iphoneProducts = document.getElementsByClassName("iphone-product");

const iphoneItem = [
  {
    id: 1,
    image: "/img_products/iPhone/iphone6.png",
    name: "iPhone XR 64gb",
    price: "₱31,990",
  },
  {
    id: 2,
    image: "/img_products/iPhone/iphone1.png",
    name: "iPhone 11 Pro Max 128gb",
    price: "₱33,348",
  },
  {
    id: 3,
    image: "/img_products/iPhone/iphone2.png",
    name: "iPhone 12 Pro Max 128gb",
    price: "₱53,323",
  },
  {
    id: 4,
    image: "/img_products/iPhone/iphone3.png",
    name: "iPhone 13 Pro Max 128gb ",
    price: "₱68,990",
  },
  {
    id: 5,
    image: "/img_products/iPhone/iphone4.png",
    name: "iPhone 14 Pro Max 128gb",
    price: "₱78,990",
  },
  {
    id: 6,
    image: "/img_products/iPhone/iphone5.png",
    name: "iPhone 15 Pro Max 128gb",
    price: "₱91,990",
  },
];

iphoneItem.forEach((value) => {
  const newDIv = document.createElement("div");

  newDIv.innerHTML = `<div class="iphone-item item">
                        <img src="${value.image}" class="image"/>
                        <h3 class="product-name">${value.name}</h3>
                        <span class="price">${value.price}</span>
                        <i class="fa-solid fa-cart-plus cart"></i>
                    </div>`;

  iphoneProducts[0].appendChild(newDIv);
});

// airpods products
const airpodseProducts = document.getElementsByClassName("airpods-product");

const airpodsItem = [
  {
    id: 1,
    image: "/img_products/latest product/airpods_new.jpg",
    name: "AirPods (2nd Gen)",
    price: "₱8,490",
  },
  {
    id: 2,
    image: "/img_products/AirPods/airpods2.jpg",
    name: "AirPods Pro (2nd gen)",
    price: "₱14,990",
  },
  {
    id: 3,
    image: "/img_products/AirPods/airpods4.jpg",
    name: "AirPods (3rd gen) w/ MagSafe Charging",
    price: "₱11,990",
  },
];

airpodsItem.forEach((value) => {
  const newDIv = document.createElement("div");

  newDIv.innerHTML = `<div class="airpods-item item">
                        <img src="${value.image}" class="image"/>
                        <h3 class="product-name">${value.name}</h3>
                        <span class="price">${value.price}</span>
                        <i class="fa-solid fa-cart-plus cart"></i>
                     </div>`;

  airpodseProducts[0].appendChild(newDIv);
});

// ipad products
const ipadProducts = document.getElementsByClassName("ipad-product");

const ipadItem = [
  {
    id: 1,
    image: "/img_products/iPad/ipad1.png",
    name: "Apple iPad Pro 11 -inch (3rd Gen)",
    price: "₱98,990",
  },
  {
    id: 2,
    image: "/img_products/iPad/ipad2.png",
    name: "iPad Air",
    price: "₱39,990",
  },
  {
    id: 3,
    image: "/img_products/iPad/ipad3.png",
    name: "iPad Pro 12.9 -inch <br> (5th gen)",
    price: "₱82,990",
  },
  {
    id: 4,
    image: "/img_products/iPad/ipad4.png",
    name: "iPad Pro 12.9 -inch <br> (3rd gen)",
    price: "₱59,990",
  },
  {
    id: 5,
    image: "/img_products/iPad/ipad5.png",
    name: "iPad Pro 12.9 -inch <br> (4th gen)",
    price: "₱65,990",
  },
  {
    id: 6,
    image: "/img_products/iPad/ipad6.png",
    name: "iPad Pro 12.9 -inch Wi-Fi + Cellular 2TB",
    price: " ₱163,490",
  },
];

ipadItem.forEach((value) => {
  const newDIv = document.createElement("div");

  newDIv.innerHTML = `<div class="ipad-item item">
                          <img src="${value.image}" class="image"/>
                          <h3 class="product-name">${value.name}</h3>
                          <span class="price">${value.price}</span>
                          <i class="fa-solid fa-cart-plus cart"></i>
                      </div>`;

  ipadProducts[0].appendChild(newDIv);
});

//watch products
const watchProducts = document.getElementsByClassName("watch-product");

const watchItem = [
  {
    id: 1,
    image: "/img_products/Apple Watch/watch1.png",
    name: "Apple Watch Nike <br> Series 7",
    price: "₱16,990",
  },
  {
    id: 2,
    image: "/img_products/Apple Watch/watch2.png",
    name: "Apple Watch SE",
    price: "₱17,990",
  },
  {
    id: 3,
    image: "/img_products/Apple Watch/watch5.png",
    name: "Apple Watch SE <br> (2nd gen)",
    price: "₱20,990",
  },
  {
    id: 4,
    image: "/img_products/Apple Watch/watch3.png",
    name: "Apple Watch Series 8",
    price: "₱27,990",
  },
  {
    id: 5,
    image: "/img_products/Apple Watch/watch6.png",
    name: "Apple Watch Ultra",
    price: "₱56,990",
  },
];

watchItem.forEach((value) => {
  const newDIv = document.createElement("div");

  newDIv.innerHTML = `<div class="watch-item item">
                          <img src="${value.image}"class="image"/>
                          <h3 class="product-name">${value.name}</h3>
                          <span class="price">${value.price}</span>
                          <i class="fa-solid fa-cart-plus cart"></i>
                      </div>`;

  watchProducts[0].appendChild(newDIv);
});

// message us
const messageUs = document.querySelector(".message-us");
const messageContainer = document.querySelector(".message-container");
const messageImage = document.querySelector(".message-image");

messageUs.addEventListener("click", () => {
  if (messageContainer.style.display == "block") {
    messageContainer.style.display = "none";
    messageImage.src = "mainpage img/icon/message-us.png";
  } else {
    messageContainer.style.display = "block";
    messageImage.src = "mainpage img/icon/arrow-down.png";
  }
});

// FAQ
function toggleAnswer(id) {
  var answer = document.getElementById("answer" + id);
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}

//for order count
function orderCount() {
  let cart = document.querySelectorAll(".cart-content img");
  document.querySelector(".order-count").textContent = cart.length;

  if (cart.length !== 0) {
    document.querySelector(".cart-title").textContent = "Your cart";
  } else {
    document.querySelector(".cart-title").textContent = "No item in your cart";
  }
}

//for add to cart latest product
const latestProductsBuy = document.querySelectorAll(".product-container .cart");
const latestProductItems = document.querySelectorAll(
  ".product-container .product-item"
);
const latestContent = document.querySelector(".cart-content");

latestProductsBuy.forEach((cartButton, index) => {
  cartButton.addEventListener("click", () => {
    const productItem = latestProductItems[index];
    const productName = productItem.querySelector(".product-name").textContent;

    // Check if the product is already in the cart
    const isProductInCart = Array.from(latestContent.children).some(
      (cartItem) => {
        return (
          cartItem.querySelector(".product-name").textContent === productName
        );
      }
    );

    if (isProductInCart) {
      alert("This product is already in the cart!");
      return; // Exit the function without adding the product again
    }

    const productImage = productItem.querySelector(".product-image").src;
    const productPrice = productItem.querySelector(".price").textContent;

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");

    cartBox.innerHTML = `<img src="${productImage}" class="cart-img">
                          <div class="detail-box">
                            <div class="product-name">${productName}</div>
                            <div class="product-price">${productPrice}</div>
                            <input type="number" value="1" class="product-quantity" min="1" max="10">
                          </div>
                          <i class="fa-solid fa-trash cart-remove"></i>`;

    latestContent.appendChild(cartBox);

    orderCount();
    removeItem();
  });
});

//add to cart products
const cartContent = document.querySelector(".cart-content");
const products = [
  {
    category: "mac",
    buyButtons: document.querySelectorAll(".mac-product .cart"),
    items: document.querySelectorAll(".mac-product .mac-item"),
  },
  {
    category: "iphone",
    buyButtons: document.querySelectorAll(".iphone-product .cart"),
    items: document.querySelectorAll(".iphone-product .iphone-item"),
  },
  {
    category: "ipad",
    buyButtons: document.querySelectorAll(".ipad-product .cart"),
    items: document.querySelectorAll(".ipad-product .ipad-item"),
  },
  {
    category: "airpods",
    buyButtons: document.querySelectorAll(".airpods-product .cart"),
    items: document.querySelectorAll(".airpods-product .airpods-item"),
  },
  {
    category: "watch",
    buyButtons: document.querySelectorAll(".watch-product .cart"),
    items: document.querySelectorAll(".watch-product .watch-item"),
  },
];

function addToCart(productCategory, index) {
  const productItem = products.find(
    (product) => product.category === productCategory
  ).items[index];
  const productName = productItem.querySelector(".product-name").textContent;

  // Check if the product is already in the cart
  const isProductInCart = Array.from(cartContent.children).some((cartItem) => {
    return cartItem.querySelector(".product-name").textContent === productName;
  });

  if (isProductInCart) {
    alert("This product is already in the cart!");
    return; // Exit the function without adding the product again
  }

  const productImage = productItem.querySelector(".image").src;
  const productPrice = productItem.querySelector(".price").textContent;

  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");

  cartBox.innerHTML = `<img src="${productImage}" class="cart-img">
                        <div class="detail-box">
                          <div class="product-name">${productName}</div>
                          <div class="product-price">${productPrice}</div>
                          <input type="number" value="1" class="product-quantity" min="1" max="10">
                        </div>
                        <i class="fa-solid fa-trash cart-remove"></i>`;

  cartContent.appendChild(cartBox);

  orderCount();
  removeItem();
}

products.forEach((product) => {
  product.buyButtons.forEach((cartButton, index) => {
    cartButton.addEventListener("click", () => {
      addToCart(product.category, index);
    });
  });
});

// removing item in cart
function removeItem() {
  const removeItemBtns = document.querySelectorAll(".cart-box .cart-remove");

  removeItemBtns.forEach((itemRemoveBtn) => {
    itemRemoveBtn.addEventListener("click", () => {
      const cartBox = itemRemoveBtn.closest(".cart-box");
      cartBox.remove();

      orderCount();
    });
  });
}

//for total (quan * price)

//for all cart clicked
const allCartBtns = document.querySelectorAll(".cart");
allCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    totalPrice();
  });
});

//total price calculation
function totalPrice() {
  let total = 0;
  const totalPriceElement = document.querySelector(".total .total-price");
  const orderItems = cartContent.querySelectorAll(".cart-box");

  orderItems.forEach((item) => {
    const itemQuantity = parseInt(
      item.querySelector(".product-quantity").value
    );
    let itemPrice = item
      .querySelector(".product-price")
      .innerText.replace("₱", "");
    itemPrice = parseInt(itemPrice.replace(",", ""));

    total += itemQuantity * itemPrice;
  });

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0, // Set minimumFractionDigits to 0 to remove decimal numbers
    maximumFractionDigits: 0, // Set maximumFractionDigits to 0 to ensure no decimal numbers are shown
  });

  const formattedTotal = formatter.format(total);
  totalPriceElement.textContent = formattedTotal;

  //for all remove product clicked, to minus the total
  const allRemoveBtn = cartContent.querySelectorAll(".cart-remove");
  allRemoveBtn.forEach((itemRemove) => {
    itemRemove.addEventListener("click", () => {
      totalPrice();
    });
  });

  changeQuan();
}

//for cart quantity change
function changeQuan() {
  const cartQuantity = cartContent.querySelectorAll(".product-quantity");
  cartQuantity.forEach((quan) => {
    quan.addEventListener("input", () => {
      totalPrice();
    });
  });
}

//buy now button clicked
const buyNow = document.querySelector(".buy-btn");
const buySuccess = document.querySelector(".buy-success-container");
const buySuccessTotal = document.querySelector(".buy-success-total");

buyNow.addEventListener("click", () => {
  if (cartContent.children.length == 0) {
    alert("No item in your cart");
  } else {
    const totalPrice = document.querySelector(".total .total-price");

    buySuccessTotal.innerHTML = `Total Amount : ${totalPrice.textContent}`;
    buySuccess.style.display = "block";

    setTimeout(() => {
      buySuccess.style.display = "none";
    }, 4000);

    // local storage
    sendToOrderHistory();

    cartContent.innerHTML = "";
    totalPrice.textContent = "₱ 0";
    document.querySelector(".order-count").textContent = "0";
    orderCount();
  }
});
// local storage
function sendToOrderHistory() {
  const productNames = document.querySelectorAll(".detail-box .product-name");
  const prodPrice = document.querySelectorAll(".detail-box .product-price");
  const productQuan = document.querySelectorAll(
    ".detail-box .product-quantity"
  );

  let orderArray = [];

  // Retrieve existing data from local storage
  const existingOrderArray = sessionStorage.getItem("orderArray");
  if (existingOrderArray) {
    orderArray = JSON.parse(existingOrderArray);
  }

  productNames.forEach((name, index) => {
    const itemName = name.textContent || "";
    const itemPrice = prodPrice[index].textContent || "";
    const itemQuan = productQuan[index].value || "";

    const orderDetails = {
      itemName: itemName,
      itemPrice: itemPrice,
      itemQuan: itemQuan,
    };

    orderArray.push(orderDetails);
  });

  // Check if adding the new data exceeds local storage capacity
  const currentStorageSize = new Blob([JSON.stringify(orderArray)]).size;
  const localStorageCapacity = 5 * 1024 * 1024; // 5 MB (adjust as needed)

  if (currentStorageSize > localStorageCapacity) {
    // Remove the first object in the array
    orderArray.shift();
  }

  // Store the updated orderArray in local storage
  sessionStorage.setItem("orderArray", JSON.stringify(orderArray));
}

// search input show
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  if (searchInput.classList.contains("search-input-show")) {
    searchInput.classList.remove("search-input-show");
  } else {
    searchInput.classList.add("search-input-show");
    searchInput.focus();
  }
});

// search product
function seacrhing() {
  const productSection = document.querySelector(".products");
  const searchProduct = document.querySelector(".search-input");
  const allProducts = document.querySelectorAll(
    ".products .product-item, .products .item"
  );
  const allProductNames = document.querySelectorAll(".products .product-name");
  let itemHolder = [];

  searchProduct.addEventListener("keyup", (event) => {
    const userSearch = searchProduct.value.toUpperCase();
    if (event.key === "Enter") {
      newSection.innerHTML = "";
      itemHolder = []; // Clear itemHolder before storing new matched items

      allProducts.forEach((product, index) => {
        const productName = allProductNames[index].textContent.toUpperCase();
        if (productName.includes(userSearch)) {
          itemHolder.push(product.cloneNode(true)); // Clone the matched product node
        }
      });
      productSection.classList.add("hide");
      searchItemContainer();
      addToCartSearchItem();
      //to remove the focus on input
      searchProduct.blur();
      searchLabel.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        suggestionRow.innerHTML = "";
      }, 0);
    }
  });

  function searchItemContainer() {
    newSection.classList.add("search-item-section");
    searchLabel.classList.add("search-label");
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("search-item-container");

    if (itemHolder.length === 0) {
      searchLabel.textContent = "No matching items found 😵🤷";
    } else {
      searchLabel.textContent = "Available Products 👇";
    }

    newSection.appendChild(searchLabel);

    itemHolder.forEach((value) => {
      value.classList.remove(value.classList[0]);
      value.classList.remove(value.classList[0]);
      value.classList.add("search-item");
      itemContainer.appendChild(value);
    });

    newSection.appendChild(itemContainer);
    document
      .querySelector(".banner")
      .insertAdjacentElement("afterend", newSection);
    searchLabel.scrollIntoView({ behavior: "smooth" });
  }

  searchProduct.addEventListener("input", () => {
    if (searchProduct.value === "") {
      productSection.classList.remove("hide");
      newSection.innerHTML = "";
    }
  });
}
const newSection = document.createElement("section");
const searchLabel = document.createElement("h2");
seacrhing();

//for add to cart searched product
function addToCartSearchItem() {
  const searchProductsBuy = document.querySelectorAll(".search-item .cart");
  const searchProductItems = document.querySelectorAll(".search-item");

  searchProductsBuy.forEach((cartButton, index) => {
    cartButton.addEventListener("click", () => {
      const productItem = searchProductItems[index];
      const productName =
        productItem.querySelector(".product-name").textContent;

      // Check if the product is already in the cart
      const isProductInCart = Array.from(cartContent.children).some(
        (cartItem) => {
          return (
            cartItem.querySelector(".product-name").textContent === productName
          );
        }
      );

      if (isProductInCart) {
        alert("This product is already in the cart!");
        return; // Exit the function without adding the product again
      }

      const productImage = productItem.querySelector(
        ".image, .product-image"
      ).src;
      const productPrice = productItem.querySelector(".price").textContent;

      const cartBox = document.createElement("div");
      cartBox.classList.add("cart-box");

      cartBox.innerHTML = `<img src="${productImage}" class="cart-img">
                              <div class="detail-box">
                                <div class="product-name">${productName}</div>
                                <div class="product-price">${productPrice}</div>
                                <input type="number" value="1" class="product-quantity" min="1" max="10">
                              </div>
                              <i class="fa-solid fa-trash cart-remove"></i>`;

      cartContent.appendChild(cartBox);

      orderCount();
      removeItem();
      totalPrice();
    });
  });
}

//for button clicked if the search is on (to reset the layout)
const clickableBtn = document.querySelectorAll(
  ".navbar-categ, .logo, .addtocart-slider"
);
clickableBtn.forEach((btn) => {
  const productSection = document.querySelector(".products");
  btn.addEventListener("click", () => {
    productSection.classList.remove("hide");
    newSection.innerHTML = "";
    searchProduct.value = "";
    suggestionRow.innerHTML = "";
  });
});

//for search product suggestion
let productNameString = [];
const suggestionRow = document.querySelector(".suggestion-row");
const allProductNames = document.querySelectorAll(".products .product-name");
allProductNames.forEach((value) => {
  productNameString.push(value.textContent);
});
const searchProduct = document.querySelector(".search-input");
searchProduct.addEventListener("keyup", () => {
  let result = [];
  let input = searchProduct.value;

  if (input.length) {
    result = productNameString.filter((keyword) => {
      return keyword.toUpperCase().includes(input.toUpperCase());
    });
  }
  displayResult(result);

  if (!result.length) {
    suggestionRow.innerHTML = "";
  }
});

function displayResult(result) {
  const content = result.map((list) => {
    return (
      '<li onclick="selectInput(this); triggerEnter();" >' + list + "</li>"
    );
  });
  suggestionRow.innerHTML = `<ul> ${content.join("")} </ul>`;
}

function selectInput(list) {
  searchProduct.value = list.textContent;
  suggestionRow.innerHTML = "";
  searchProduct.focus();
}

function triggerEnter() {
  var inputElement = document.querySelector(".search-input");

  var keydownEvent = new KeyboardEvent("keydown", { key: "Enter" });
  var keyupEvent = new KeyboardEvent("keyup", { key: "Enter" });

  inputElement.dispatchEvent(keydownEvent);
  inputElement.dispatchEvent(keyupEvent);

  suggestionRow.innerHTML = "";
}
