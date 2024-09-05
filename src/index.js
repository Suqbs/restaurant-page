import "./styles.css";
import { LoadInitialPage } from "./initial-page-load";
import { LoadHomePage } from "./home-page";
import { LoadMenuPage } from "./menu-page";
import { LoadAboutPage } from "./about-page";

const content = document.getElementById("content");
const initialTab = document.getElementById("home-tab")

LoadInitialPage(LoadHomePage, content, initialTab);

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Check if the content is already visible and avoid reloading
    if (!tab.classList.contains("active")) {
      // Wipe out current content first
      content.textContent = "";

      // Remove active from all tabs first
      tabs.forEach((tab) => tab.classList.remove("active"));

      // Then add active to the newly clicked one
      tab.classList.add("active");

      if (tab.id === "home-tab") {
        LoadHomePage(content);
      } else if (tab.id === "menu-tab") {
        LoadMenuPage(content);
      } else if (tab.id === "about-tab") {
        LoadAboutPage(content);
      }
    }
  });
});
