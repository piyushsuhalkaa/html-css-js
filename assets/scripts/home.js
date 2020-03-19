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
        .querySelector(".item-select-option .item-option-selected")
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
/**
 *Our Restaurant Menu
 */
(() => {
  let menuTabOptions = document.querySelector(".menu-wrapper ul"),
    menuTabs = menuTabOptions.getElementsByTagName("li"),
    activeMenuTab = menuTabOptions.querySelector("ul .active-tab"),
    activeMenuContent = document.querySelector("article .active"),
    menuContents = document.querySelectorAll(".menu-content"),
    activeTab;
  menuTabOptions.addEventListener(
    "click",
    e => {
      let { target } = e;
      if (target == activeMenuTab) return;
      if (target.nodeName.toLowerCase() == "li") {
        activeMenuTab.classList.remove("active-tab");
        target.classList.add("active-tab");
        activeMenuTab = target;
      }
      for (activeTab = 0; activeTab < 2; activeTab++) {
        if (menuTabs[activeTab] == activeMenuTab) break;
      }
      activeMenuContent.classList.remove("active");
      menuContents[activeTab].classList.add("active");
      activeMenuContent = menuContents[activeTab];
    },
    false
  );
})();
