import kebabImage from "./image/kebab-plate.jpg";
import lambShishImage from "./image/lamb-shish.jpg";
import chickenAdanaImage from "./image/chicken-adana.jpg";

// const card1 = document.createElement("div");

// const cardTitle = document.createElement("h2");
// cardTitle.classList.add("card-title");

// const cardIntro = document.createElement("p");
// cardIntro.classList.add("card-intro");

// const image = document.createElement("img");
// image.src = kebabImage;
// image.alt = "kebab plate";

function createCard(section, title, intro, imgSrc, imgAlt) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  const cardIntro = document.createElement("p");
  cardIntro.classList.add("card-intro");
  cardIntro.textContent = intro;

  const image = document.createElement("img");
  image.src = imgSrc;
  image.alt = imgAlt;

  card.appendChild(cardTitle);
  card.appendChild(cardIntro);
  card.appendChild(image);
 
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

export function LoadMenuPage(content) {

    createSection("Main Dishes", mainDishes, content);

}

const mainDishes = [];
const desserts = [];
const beverages = [];

/* Main Dishes */
createCard(
  mainDishes,
  "Kebab Extravaganza",
  "Embark on a culinary adventure with our kebab platter, featuring a delicious assortment of grilled lamb, chicken, and beef kebabs. Served with rice, salad, and a side of Turkish bread.",
  kebabImage,
  "kebab plate"
);

createCard(
  mainDishes,
  "Lamb Skewer Sensation",
  "Savor the tender and juicy lamb skewers in our Lamb Shish, grilled to perfection and bursting with flavor. A classic Turkish dish that is sure to please.",
  lambShishImage,
  "lamb shish"
);

createCard(
  mainDishes,
  "Fiery Chicken Adana",
  "Experience the fiery heat of our Chicken Adana, spicy minced chicken kebabs that are packed with flavor. A must-try for those who love a little spice.",
  chickenAdanaImage,
  "chicken Adana"
);