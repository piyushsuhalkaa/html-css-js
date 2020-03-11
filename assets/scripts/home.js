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
