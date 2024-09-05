import kebabImage from "./image/kebab-plate.jpg";
import lambShishImage from "./image/lamb-shish.jpg";
import chickenAdanaImage from "./image/chicken-adana.jpg";

import ayranImage from "./image/ayran.jpg";
import teaImage from "./image/tea.jpg";
import turkishCoffeImage from "./image/turkish-coffee.jpg";

import baklavaImage from "./image/baklava.jpg";
import turkishDelightImage from "./image/turkish-delight.jpg";
import kadayifImage from "./image/kadayif.jpg";

const mainDishes = [];
const desserts = [];
const beverages = [];

/* Main Dishes */
createCard(
  mainDishes,
  "Kebab Extravaganza",
  "Embark on a culinary adventure with our kebab platter, featuring a delicious assortment of grilled lamb, chicken, and beef kebabs. Served with rice, salad, and a side of Turkish bread.",
  kebabImage,
  "kebab plate",
  "10$"
);

createCard(
  mainDishes,
  "Lamb Skewer Sensation",
  "Savor the tender and juicy lamb skewers in our Lamb Shish, grilled to perfection and bursting with flavor. A classic Turkish dish that is sure to please.",
  lambShishImage,
  "lamb shish",
  "10$"
);

createCard(
  mainDishes,
  "Fiery Chicken Adana",
  "Experience the fiery heat of our Chicken Adana, spicy minced chicken kebabs that are packed with flavor. A must-try for those who love a little spice.",
  chickenAdanaImage,
  "chicken Adana",
  "10$"
);

/* Beverages */
createCard(
  beverages,
  "Ayran Refreshment",
  "Quench your thirst with our Ayran, a refreshing buttermilk drink made with yogurt, water, and salt. A healthy and delicious beverage that is perfect for hot summer days.",
  ayranImage,
  "ayran",
  "2$"
);

createCard(
  beverages,
  "Turkish Tea Time",
  "Refresh yourself with a cup of our Turkish Tea, brewed from high-quality tea leaves and served in traditional glass cups. A popular beverage enjoyed by people of all ages.",
  teaImage,
  "tea",
  "1$"
);

createCard(
  beverages,
  "Turkish Coffee Craze",
  "Experience the strong and aromatic flavor of our Turkish Coffee, brewed in a cezve and served in small cups. A traditional Turkish beverage that is perfect for a leisurely afternoon.",
  turkishCoffeImage,
  "Turkish Coffee",
  "2$"
);

/* Desserts */
createCard(
  desserts,
  "Baklava Bliss",
  "Treat yourself to the sweet and decadent taste of our Baklava, crispy filo pastry layered with chopped nuts and sweetened syrup. A classic Turkish dessert that is sure to satisfy your sweet tooth.",
  baklavaImage,
  "baklava",
  "4$"
);

createCard(
  desserts,
  "Turkish Delightful",
  "Enjoy the chewy and delightful texture of our Turkish Delight, made with rosewater and sugar. A traditional Turkish candy that comes in a variety of flavors.",
  turkishDelightImage,
  "Turkish Delight",
  "3$"
);

createCard(
  desserts,
  "Kadayıf Heaven",
  "Indulge in the sweet and nutty goodness of our Kadayıf, shredded phyllo pastry soaked in syrup and topped with chopped walnuts. A rich and satisfying dessert.",
  kadayifImage,
  "kadayıf",
  "4$"
);

export function LoadMenuPage(content) {
  createSection("Main Dishes", mainDishes, content);
  createSection("Beverages", beverages, content);
  createSection("Desserts", desserts, content);
}

function createCard(section, title, intro, imgSrc, imgAlt, price) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = price;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardPrice);

  const cardIntro = document.createElement("p");
  cardIntro.classList.add("card-intro");
  cardIntro.textContent = intro;

  const image = document.createElement("img");
  image.src = imgSrc;
  image.alt = imgAlt;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  imageContainer.appendChild(image);

  card.appendChild(cardInfo);
  card.appendChild(cardIntro);
  card.appendChild(imageContainer);

  section.push(card);
}

function createSection(sectionTitle, sectionArray, content) {
  const title = document.createElement("h1");
  title.classList.add("section-title");
  title.textContent = sectionTitle;

  content.appendChild(title);

  for (let i = 0; i < sectionArray.length; i++) {
    content.appendChild(sectionArray[i]);

    if (i !== sectionArray.length - 1) {
      const roundHr = document.createElement("hr");
      roundHr.classList.add("round-style");

      content.appendChild(roundHr);
    }
  }
}
