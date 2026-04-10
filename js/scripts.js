const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('.nav-links a').forEach((anchor) => {
  anchor.addEventListener('click', () => {
    if (nav) {
      nav.classList.remove('open');
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.fade-up').forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  if (nav) {
    nav.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
  }
});
