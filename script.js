// JavaScript Document
// Burger meni
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    menuToggle.classList.remove('active');
  });
});

// Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dotsContainer = document.getElementById('dots');

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
    resetTimer();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
    dots[i].classList.toggle('active', i === n);
  });
}

next.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
  resetTimer();
});

prev.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
  resetTimer();
});

let slideTimer = setInterval(nextSlide, 5000);
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 5000);
}

// Scroll reveal animacija
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (const el of reveals) {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('visible');
  }
});

// Scroll to top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) scrollTopBtn.classList.add('show');
  else scrollTopBtn.classList.remove('show');
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
