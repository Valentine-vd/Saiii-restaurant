let menuToggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector(".nav-bar")

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("active");
    menuToggle.classList.toggle("is-active");
   
});


const navLinks = document.querySelectorAll(".link");

navLinks.forEach(link=>{
    link.addEventListener("click", () => {
        navBar.classList.remove("active");
        menuToggle.classList.remove("is-active");
    });
});

let openModal = document.getElementById("openModal");
let modal = document.getElementById("storyModal");
let closeBtn = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
    modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
     modal.classList.remove("show");
});



const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  hiddenElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
     if(elementTop < window.innerHeight - 100){
        el.classList.add("reveal");
     }
  });
});


const menuSlider = document.querySelector(".menu-slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  menuSlider.scrollLeft += 220;
});

prevBtn.addEventListener("click", () => {
  menuSlider.scrollLeft -= 220;
});


const form = document.getElementById("reservation-form");

form.addEventListener("submit",
  function(e){
    e.preventDefault();
    alert("Reservation Submitted!");
    form.reset();
  }
);