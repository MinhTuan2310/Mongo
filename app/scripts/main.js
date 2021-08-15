// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const itemList = document.querySelectorAll(".nav-item");
toggle.addEventListener("click", e => {
  menu.classList.toggle("active");
  e.target.classList.toggle("fa-bars");
  e.target.classList.toggle("fa-times");
});

document.body.addEventListener("click", e => {
  if(!menu.contains(e.target) && !e.target.matches(".nav-toggle")) {
    menu.classList.remove("active");
  }
});

[...itemList].forEach(item => {
  item.addEventListener("click", e => {
    menu.classList.remove("active");
  })
});
