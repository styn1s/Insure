const burgerBtn = document.querySelector(".header__burger-btn");
const exitBtn = document.querySelector(".header__exit-btn");
const mobileMenu = document.querySelector(".header__mobile-menu");

function toggleMobileMenu(show) {
  burgerBtn.style.display = show ? "none" : "block";
  exitBtn.style.display = show ? "block" : "none";
  mobileMenu.style.display = show ? "block" : "none";
}

function hideAll() {
  burgerBtn.style.display = "none";
  exitBtn.style.display = "none";
  mobileMenu.style.display = "none";
}

function updateView() {
  var windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    hideAll();
    returnImage();
  } else {
    toggleMobileMenu(mobileMenu.style.display === "block");
    replaceImage();
  }
}

function replaceImage() {
  const familyPic = document.querySelector(".advantages__family-pic");
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  header.parentNode.insertBefore(familyPic, main);
}

function returnImage() {
  const familyPic = document.querySelector(".advantages__family-pic");
  const advantagesSection = document.querySelector(".advantages");
  advantagesSection.prepend(familyPic);
}

document.addEventListener("DOMContentLoaded", function () {
  burgerBtn.addEventListener("click", () => toggleMobileMenu(true));
  exitBtn.addEventListener("click", () => toggleMobileMenu(false));
  window.addEventListener("resize", updateView);
  updateView();
});
