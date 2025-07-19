// Counter animasyonu
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const speed = 40; // daha yavaş için artır
    const count = +counter.innerText;
    const inc = Math.ceil(target / speed);
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + (target === 100 ? '%' : '+');
    }
  };
  updateCount();
});

// Navbar aktif link animasyonu
const navLinks = document.querySelectorAll('.nav-link.nav-anim');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Hamburger menü aç/kapa
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
hamburger && hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
});
// Menüden bir linke tıklanınca menüyü kapat
const navLinksMobile = document.querySelectorAll('.nav-link.nav-anim');
navLinksMobile.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
  });
});
// Yukarı çık butonu
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
scrollBtn && scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// SSS (FAQ) akordeon
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('open');
  });
}); 