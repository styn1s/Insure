var burgerIcon = document.getElementById("burger-icon");
var exitIcon = document.getElementById("exit-icon");
var mobileMenu = document.getElementById("mobile-menu");

function showMobileMenu(){
    burgerIcon.style.display = "none";
    exitIcon.style.display = "block";
    mobileMenu.style.display = "block";
}

function hideMobileMenu(){
    burgerIcon.style.display = "block";
    exitIcon.style.display = "none";
    mobileMenu.style.display = "none";
}

function hideAll(){
    burgerIcon.style.display = "none";
    exitIcon.style.display = "none";
    mobileMenu.style.display = "none";
}

function updateView(){
    var windowWidth = window.innerWidth;
    if (windowWidth > 768){
        hideAll();
    }
    else{
        if (exitIcon.style.display === "none"){
            burgerIcon.style.display = "block";
        }
    }
    
}

document.addEventListener("DOMContentLoaded", function(){
    burgerIcon.addEventListener("click", showMobileMenu);
    exitIcon.addEventListener("click", hideMobileMenu);
    window.addEventListener("resize", updateView);
});