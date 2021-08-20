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
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");
  }
});

[...itemList].forEach(item => {
  item.addEventListener("click", e => {
    menu.classList.remove("active");
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");
  })
});
// accordion
const accItemList = document.querySelectorAll(".wedo-accordion-item");
const accSelectList = document.querySelectorAll(".wedo-accordion-select");
const accOptionList = document.querySelectorAll(".wedo-accordion-option");

[...accSelectList].forEach(accSelect => {
  accSelect.addEventListener("click", e => {
    accOptionList.forEach(accOption => {
      accOption.classList.remove("active");
    });
    e.currentTarget.nextElementSibling.classList.add("active");
  })
});

// slider
const prevButtonList = document.querySelectorAll(".slider-prev");
const nextButtonList = document.querySelectorAll(".slider-next");
const sliderList = document.querySelectorAll(".slider-list");

const sliderItemList = document.querySelectorAll(".slider-item")

// const position = sliderItem[0].clientWidth;

let position = 0;

nextButtonList.forEach(nextButton => {

  nextButton.addEventListener("click", e => {
    handleChangeSlide(1);
  })
});

prevButtonList.forEach(prevButton => {

  prevButton.addEventListener("click", e => {
    handleChangeSlide(-1);
  })
});

function handleChangeSlide(dir) {
  if(dir === 1) {
    if(position <= -200) return;
    
    position = position - 100;
    sliderList.forEach(slider => {
      slider.style.transform = `translateX(${position}%)`;
    })
  }
  if(dir === -1) {
    if(position >= 0) return;
    
    position = position + 100;
    sliderList.forEach(slider => {
      slider.style.transform = `translateX(${position}%)`;
    })
  }
}
// scrollReveal
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})
sr.reveal(`.header-content`)
sr.reveal(`.header-list`, {origin: "left", duration: 2000})
sr.reveal(`section`);
sr.reveal(`.footer`);


// number counting
const number = document.querySelector(".number");
const counters = document.querySelectorAll(".number-head");
const speed = 100;
console.log(window.scrollY);
console.log(number.offsetTop);

window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if(this.scrollY >= number.offsetTop - 500) {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-set");
        const count = +counter.innerText;
    
        if(count < target) {
          counter.innerText = count + 1;
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      }
    
      updateCount();
    })
  }
}


