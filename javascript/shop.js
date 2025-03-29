// show and hide product category on click

const sideNav = document.querySelectorAll(".navItem");
const arrow = document.getElementById("arrow");

arrow.addEventListener("click", () => {
  console.log("enter");
  sideNav.forEach((item) => {
    const showList = item.getAttribute("data-category");

    if (showList === "false") {
      item.setAttribute("data-category", true);
      arrow.setAttribute("data-category", true);
    } else {
      item.setAttribute("data-category", false);
      arrow.setAttribute("data-category", false);
    }
  });
});
