import foodImage from "./image/food.jpg";

const title = document.createElement("h2");
title.classList.add("welcoming-title");
title.textContent = "A warm welcome to FURKAN RESTAURANT!";

const image = document.createElement("img");
image.src = foodImage;
image.alt = "food";

const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
imageContainer.appendChild(image);

const intro = document.createElement("p");
intro.classList.add("intro");
intro.textContent =
  `Discover a culinary journey like no other at FURKAN RESTAURANT. Our passion for authentic Turkish cuisine shines through in every dish, crafted with the finest ingredients and served with a touch of warmth and hospitality. Whether you're seeking a casual meal or a special occasion, our menu offers a diverse range of options to satisfy every palate. From succulent kebabs to flavorful stews, each bite is a testament to our commitment to culinary excellence. Join us for a memorable dining experience at FURKAN RESTAURANT, where the flavors of Turkey come alive.`;

const workingHoursTitle = document.createElement("h2");
workingHoursTitle.classList.add("small-title");
workingHoursTitle.textContent = "Working Hours";



const weekDays = document.createElement("p");
weekDays.textContent = "Weekdays: 1am - 1pm (CDT)";

const weekends = document.createElement("p");
weekends.textContent = "Weekends: 4am - 12pm (CDT)";

const workingHours = document.createElement("div");
workingHours.classList.add("working-hours");
workingHours.appendChild(weekDays);
workingHours.appendChild(weekends);

const locationTitle = document.createElement("h2");
locationTitle.classList.add("small-title");
locationTitle.textContent = "Location";

const location = document.createElement("p");
location.textContent = "Chicago, Illinois(IL), 60638";

export function LoadHomePage(content) {
    content.appendChild(title);
    content.appendChild(imageContainer);
    content.appendChild(intro);
    content.appendChild(workingHoursTitle);
    content.appendChild(workingHours);
    content.appendChild(locationTitle);
    content.appendChild(location);
}

