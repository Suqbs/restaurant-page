import "./styles.css";
import { LoadHomePage } from "./home-page";
import { LoadMenuPage } from "./menu-page";
import { LoadAboutPage } from "./about-page";

const content = document.getElementById("content");

const tabs = document.querySelectorAll("#tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Check if the content is already visible and avoid reloading
  if (!tab.classList.contains("active")) {
    // Remove active from all tabs first
    tabs.forEach(tab => tab.classList.remove('active'));

    // Then add active to the newly clicked one 
    tab.classList.add("active");
  }
  });
});

const newContent = LoadHomePage(content);
// LoadHomePage(content);
// LoadMenuPage(content);
LoadAboutPage(content);
