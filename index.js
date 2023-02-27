let products = {
  data: [
    {
      productName: "Apple",
      category: "Fruits",
      price: "100",
      image: "apple.jpg",
    },
    {
      productName: "Banana",
      category: "Fruits",
      price: "25",
      image: "Banana.jpg",
    },
    {
      productName: "Casual-Black Tshirt",
      category: "Dress",
      price: "349",
      image: "Black_shirt_casuals.jpg",
    },
    {
      productName: "Modern Bluetooth Speaker",
      category: "Electronics",
      price: "1259",
      image: "Bluetooth_speaker.jpg",
    },
    {
      productName: "Bluetooth",
      category: "Electronics",
      price: "1950",
      image: "Bluetooth.jpg",
    },
    {
      productName: "Formal Checked Shirt",
      category: "Dress",
      price: "599",
      image: "checked_shirt.jpg",
    },
    {
      productName: "CornFlakes",
      category: "Groceries",
      price: "85",
      image: "cornflakes.jpg",
    },
    {
      productName: "Music Earphones",
      category: "Electronics",
      price: "2399",
      image: "Earphone.png",
    },
    {
      productName: "Formal Shirt",
      category: "Dress",
      price: "799",
      image: "formal_shirt.jpg",
    },
    {
      productName: "Little Baby Frock",
      category: "Dress",
      price: "3500",
      image: "frock.jpg",
    },
    {
      productName: "Fruit Jam",
      category: "Groceries",
      price: "90",
      image: "Jam.jpg",
    },
    {
      productName: "Potato Lays",
      category: "Groceries",
      price: "25",
      image: "Lays.jpg",
    },
    {
      productName: "Mango",
      category: "Fruits",
      price: "200",
      image: "mango.jpg",
    },
    {
      productName: "One plus Smart Phone 4GB",
      category: "Electronics",
      price: "11,999",
      image: "Oneplus_smartphone.jpg",
    },
    {
      productName: "Orange",
      category: "Fruits",
      price: "180",
      image: "orange.jpg",
    },
    {
      productName: "Oreo Biscuit",
      category: "Groceries",
      price: "45",
      image: "Oreo.jpg",
    },
    {
      productName: "Casual White Tshirt",
      category: "Dress",
      price: "499",
      image: "white_tshirt_casuals.jpg",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div"); //create card

  //card should have category and should hide initially
  card.classList.add("card", i.category, "hide");

  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("Products").appendChild(card);
}
//parameter passed from select option (as same as Category)
function filterProduct(value) {
  //select all cards
  let elements = document.querySelectorAll(".card");
  // loop through all cards
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals inner text
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
//search  button click

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching cards
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
//initially display all products
window.onload = () => {
  filterProduct("all");
};
