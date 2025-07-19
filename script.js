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