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
 *  Fucntion To Show Toggle Menu on Click for Small Devices
 */
function showMenu() {
  console.log("click Detected");
}
/* CTA Form Custom Select Option*/
document
  .querySelector(".form-item-select-wrapper")
  .addEventListener("click", function() {
    this.querySelector(".form-item-select").classList.toggle("open-option");
  });

for (const option of document.querySelectorAll(".item-select-option")) {
  option.addEventListener("click", function() {
    if (!this.classList.contains("item-option-selected")) {
      this.parentNode
        .querySelector(".item-select-option.item-option-selected")
        .classList.remove("item-option-selected");
      this.classList.add("item-option-selected");
      this.closest(".form-item-select").querySelector(
        ".item-select-trigger span"
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function(value) {
  const select = document.querySelector(".form-item-select");
  if (!select.contains(value.target)) {
    select.classList.remove("open-option");
  }
});
