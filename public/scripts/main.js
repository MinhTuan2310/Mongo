"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var toggle=document.querySelector(".nav-toggle"),menu=document.querySelector(".nav-menu"),itemList=document.querySelectorAll(".nav-item");toggle.addEventListener("click",function(e){menu.classList.toggle("active"),e.target.classList.toggle("fa-bars"),e.target.classList.toggle("fa-times")}),document.body.addEventListener("click",function(e){menu.contains(e.target)||e.target.matches(".nav-toggle")||(menu.classList.remove("active"),toggle.classList.remove("fa-times"),toggle.classList.add("fa-bars"))}),[].concat(_toConsumableArray(itemList)).forEach(function(e){e.addEventListener("click",function(e){menu.classList.remove("active"),toggle.classList.remove("fa-times"),toggle.classList.add("fa-bars")})});var accItemList=document.querySelectorAll(".wedo-accordion-item"),accSelectList=document.querySelectorAll(".wedo-accordion-select"),accOptionList=document.querySelectorAll(".wedo-accordion-option");[].concat(_toConsumableArray(accSelectList)).forEach(function(e){e.addEventListener("click",function(e){accOptionList.forEach(function(e){e.classList.remove("active")}),e.currentTarget.nextElementSibling.classList.add("active")})});var prevButtonList=document.querySelectorAll(".slider-prev"),nextButtonList=document.querySelectorAll(".slider-next"),sliderList=document.querySelectorAll(".slider-list"),sliderItemList=document.querySelectorAll(".slider-item"),position=0;function handleChangeSlide(e){if(1===e){if(position<=-200)return;position-=100,sliderList.forEach(function(e){e.style.transform="translateX("+position+"%)"})}-1===e&&(0<=position||(position+=100,sliderList.forEach(function(e){e.style.transform="translateX("+position+"%)"})))}nextButtonList.forEach(function(e){e.addEventListener("click",function(e){handleChangeSlide(1)})}),prevButtonList.forEach(function(e){e.addEventListener("click",function(e){handleChangeSlide(-1)})});var sr=ScrollReveal({distance:"60px",duration:2500,delay:400});sr.reveal(".header-content"),sr.reveal(".header-list",{origin:"left",duration:2e3}),sr.reveal("section"),sr.reveal(".footer");var number=document.querySelector(".number"),counters=document.querySelectorAll(".number-head"),speed=100;function scrollHeader(){this.scrollY>=number.offsetTop-500&&counters.forEach(function(o){(function e(){var t=+o.getAttribute("data-set"),n=+o.innerText;n<t?(o.innerText=1+n,setTimeout(e,50)):o.innerText=t})()})}console.log(window.scrollY),console.log(number.offsetTop),window.addEventListener("scroll",scrollHeader);