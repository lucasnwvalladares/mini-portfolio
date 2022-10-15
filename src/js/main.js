const navItemsList = document.querySelectorAll(".nav-item");

navItemsList.forEach(navItem => {
  navItem.addEventListener("click", function () {

    if (navItem.classList.contains("selected")) {
      return;
    }

    selectNavItem(navItem)
    showNavItemInfo(navItem)
  });
});

function selectNavItem (navItem) {
  const selectedNavItem = document.querySelector(".nav-item.selected");
  selectedNavItem.classList.remove("selected");

  navItem.classList.add("selected");
}

function showNavItemInfo (navItem) {
  const infoSelected = document.querySelector(".info.selected");
  infoSelected.classList.remove("selected");

  const navItemID = `info-${navItem.id}`

  const toShowInfo = document.getElementById(navItemID)
  toShowInfo.classList.add("selected")
}