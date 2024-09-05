import chefImage from "./image/chef.jpg";

const image = document.createElement("img");
image.src = chefImage;
image.alt = "chef";

const aboutSection = document.createElement("div");
aboutSection.classList.add("about-section");

const aboutParagraph = document.createElement("p");
aboutParagraph.classList.add("about-paragraph");

const tabTitle = document.createElement("h1");
tabTitle.textContent = "About Furkan Restaurant";
tabTitle.classList.add("big-title");

const about = document.createElement("p");
about.textContent = "Furkan Restaurant is a haven for those seeking an authentic taste of Turkey. Nestled in the heart of Ohio, our restaurant offers a culinary experience that transports you to the bustling streets of Istanbul, the tranquil countryside of Anatolia, and the vibrant bazaars of the Mediterranean coast. Our passion for Turkish cuisine is evident in every dish we serve. We believe that food is more than just sustenance; it is a cultural experience that brings people together. That's why we are committed to using only the freshest, highest-quality ingredients, sourced from local farmers and producers. From the savory aroma of grilled kebabs to the comforting warmth of a hearty stew, each bite is a testament to our dedication to culinary excellence. At Furkan Restaurant, we strive to create an atmosphere that is as inviting as our food. Our warm and welcoming staff is dedicated to providing exceptional service, ensuring that your dining experience is memorable. Whether you're celebrating a special occasion or simply looking for a delicious meal, we invite you to join us on a culinary journey that will delight your senses and leave you craving more.";

const ourStoryTitle = document.createElement("h2");
ourStoryTitle.classList.add("small-title");
ourStoryTitle.textContent = "Our Story";

const ourStoryParagraph = document.createElement("p");
ourStoryParagraph.textContent = "Furkan Restaurant was founded in 1991 by Furkan Karadeniz, a passionate chef with a deep love for Turkish cuisine. Inspired by his life in Turkey, Furkan Karadeniz sought to bring the authentic flavors of his homeland to Ohio. With a commitment to quality, tradition, and innovation, Furkan Restaurant quickly became a local favorite. Over the years, Furkan Restaurant has expanded its menu to offer a diverse range of dishes, from classic Turkish favorites to modern interpretations of traditional cuisine. Our chefs are constantly experimenting with new flavors and techniques, ensuring that our menu remains fresh and exciting.";

const ourCommitmentTitle = document.createElement("h2");
ourCommitmentTitle.classList.add("small-title");
ourCommitmentTitle.textContent = "Our Commitment";

const ourCommitmentParagraph = document.createElement("p");
ourCommitmentParagraph.textContent = "We are committed to providing our guests with an exceptional dining experience. We will continue to strive for excellence in all that we do, from the quality of our food to the warmth of our hospitality. We are grateful for the opportunity to serve our community and look forward to welcoming you to Furkan Restaurant.";

export function LoadAboutPage(content) {
    content.appendChild(aboutSection);
}

aboutParagraph.appendChild(tabTitle);
aboutParagraph.appendChild(about);
aboutParagraph.appendChild(ourStoryTitle);
aboutParagraph.appendChild(ourStoryParagraph);
aboutParagraph.appendChild(ourCommitmentTitle);
aboutParagraph.appendChild(ourCommitmentParagraph);

aboutSection.appendChild(image);
aboutSection.appendChild(aboutParagraph);