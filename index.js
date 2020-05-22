const pictures = [
  {
    id: 1,
    photographer: "Bird One",
    category: "birds",
    price: 14,
    img: "images/bird-one.jpeg",
  },
  {
    id: 2,
    photographer: "Bird Two",
    category: "birds",
    price: 10,
    img: "images/bird-two.jpeg",
  },
  {
    id: 3,
    photographer: "Book One",
    category: "books",
    price: 12,
    img: "images/books-one.jpeg",
  },
  {
    id: 4,
    photographer: "Book two",
    category: "books",
    price: 16,
    img: "images/book-two.jpg",
  },
  {
    id: 5,
    photographer: "Person One",
    category: "people",
    price: 9.99,
    img: "images/person-one.jpeg",
  },
  {
    id: 6,
    photographer: "Person Two",
    category: "people",
    price: 7,
    img: "images/person-two.jpeg",
  },
  {
    id: 7,
    photographer: "Shoe One",
    category: "shoes",
    price: 11,
    img: "images/shoe-one.jpg",
  },
  {
    id: 8,
    photographer: "Shoe Two",
    category: "shoes",
    price: 10,
    img: "images/shoe-two.jpg",
  },
];

const sectionCenter = document.querySelector(".container");
const filterBtns = document.querySelectorAll(".filter-btn");

//load pictures
window.addEventListener("DOMContentLoaded", function () {
  displayPictureItems(pictures);
});

//filter pictures
filterBtns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const pictureCategory = pictures.filter(function (pictureItem) {
      if (pictureItem.category === category) {
        return pictureItem;
      }
    });
    if (category === "all") {
      displayPictureItems(pictures);
    } else {
      displayPictureItems(pictureCategory);
    }
  });
});

function displayPictureItems(pictureItems) {
  let displayPictures = pictureItems.map(function (picture) {
    return `<div class="item">
        <div class="item-img">
          <button class="btn-purchase">Add to Cart</button>
          <img class="image" src=${picture.img} alt="" />
        </div>
        <div class="item-desc">
          <h2 class="artist-name">${picture.photographer}</h2>
          <p class="price">$${picture.price}</p>
        </div>
      </div>`;
  });
  displayPictures = displayPictures.join("");
  sectionCenter.innerHTML = displayPictures;
}
