window.addEventListener("load", function () {
  const menu = this.document.querySelector(".menu");
  const submenus = this.document.querySelectorAll(".submenu");
  const hBg = this.document.querySelector(".header-bg")
  menu.addEventListener("mouseenter", function () {
    // alert("마우스 엔터")

    submenus.forEach(function (sub) {
      //   console.log(sub);
      sub.classList.add("active");
    });
    hBg.classList.add("open");
  });
   menu.addEventListener("mouseleave", function () {
    // alert("마우스 엔터")

    submenus.forEach(function (sub) {
      //   console.log(sub);
      sub.classList.remove("active");
    });
     hBg.classList.remove("open");
  });
});
