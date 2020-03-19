/* On Scroll Header Change Script*/
console.log("Connected");
var header = document.getElementById("header");
window.onscroll = function() {
  onScrollHeaderChange();
};
/**
 * Function To Change the Header on Scroll
 */
function onScrollHeaderChange() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.remove("header-transparent");
  } else {
    header.classList.add("header-transparent");
  }
}
/* Show Menu on Cick Script*/
var showMenuItem = document.getElementsByClassName("navigation-links");
/**
 *  Fucntion To Show Toggle Menu on Click for Small Devices
 */
var value = 1;
function showNavMenu() {
  if (value === 1) {
    document.getElementById("mobileNavigation").style.display = "block";
    value = 2;
  } else {
    document.getElementById("mobileNavigation").style.display = "none";
    value = 1;
  }
}
function changeImage() {
  var headerIcon = document.getElementById("headerMenuIcon");
  if (
    headerIcon.getAttribute("src") == "./assets/images/icons/menu-icon-bar.png"
  ) {
    headerIcon.src = "./assets/images/icons/menu-icon-arrow.png";
  } else {
    headerIcon.src = "./assets/images/icons/menu-icon-bar.png";
  }
}
