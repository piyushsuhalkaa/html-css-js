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
/**
 *  Fucntion To Show Toggle Menu on Click for Small Devices
 */
var value = true;
function showNavMenu() {
  if (value === true) {
    document.getElementById("mobileNavigation").style.display = "block";
    value = false;
  } else {
    document.getElementById("mobileNavigation").style.display = "none";
    value = true;
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

var index = 1;
showdiv(index);
function getdiv(n) {
  showdiv((index += n));
}
function showdiv(n) {
  var i;
  var as = document.getElementsByClassName("testimonial-item");
  if (n > as.length) {
    index = 1;
  }
  if (n < 1) {
    index = as.length;
  }
  for (i = 0; i < as.length; i++) {
    as[i].style.display = "none";
  }
  as[index - 1].style.display = "block";
}
