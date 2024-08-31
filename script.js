const burgerBtn = document.querySelector(".header__burger-btn");
const exitBtn = document.querySelector(".header__exit-btn");
const mobileMenu = document.querySelector(".header__mobile-menu");

function showMobileMenu() {
  burgerBtn.style.display = "none";
  exitBtn.style.display = "block";
  mobileMenu.style.display = "block";
}

function hideMobileMenu() {
  burgerBtn.style.display = "block";
  exitBtn.style.display = "none";
  mobileMenu.style.display = "none";
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
    if (exitBtn.style.display === "none") {
      burgerBtn.style.display = "block";
    }
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
  const advantagesSection = document.querySelector('.advantages');

  advantagesSection.prepend(familyPic);
}

document.addEventListener("DOMContentLoaded", function () {
  burgerBtn.addEventListener("click", showMobileMenu);
  exitBtn.addEventListener("click", hideMobileMenu);
  window.addEventListener("resize", updateView);
  updateView();
});
