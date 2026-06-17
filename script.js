// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);

});

// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// TESTIMONIAL SLIDER

const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

function showTestimonial(){

  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  testimonials[current].classList.add("active");

  current++;

  if(current >= testimonials.length){
    current = 0;
  }

}

setInterval(showTestimonial, 10000);
