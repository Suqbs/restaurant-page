import coffeeImage from "./image/coffee.jpg";

const title = document.createElement("h2");
title.classList.add("welcoming-title");
title.textContent = "A warm welcome to FURKAN RESTAURANT!";

const image = document.createElement("img");
image.src = coffeeImage;
image.alt = "coffee";

const intro = document.createElement("p");
intro.classList.add("intro");
intro.textContent =
  `Discover a culinary journey like no other at FURKAN RESTAURANT. Our passion for authentic Turkish cuisine shines through in every dish, crafted with the finest ingredients and served with a touch of warmth and hospitality. Whether you're seeking a casual meal or a special occasion, our menu offers a diverse range of options to satisfy every palate. From succulent kebabs to flavorful stews, each bite is a testament to our commitment to culinary excellence. Join us for a memorable dining experience at FURKAN RESTAURANT, where the flavors of Turkey come alive.`;

export function LoadHomePage(content) {
    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(intro);
}

