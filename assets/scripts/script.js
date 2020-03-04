/* On Scroll Header Change Script*/
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
 *  Fucntion To Show Menu on Click for Small Devices
 */
function showMenu() {
  console.log("click Detected");
}
