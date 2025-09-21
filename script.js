document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;
  let autoPlayInterval;

  // Função para mostrar slide
  function showImage(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  // Próximo slide
  function nextSlide() {
    current = (current + 1) % slides.length;
    showImage(current);
  }

  // Slide anterior
  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showImage(current);
  }

  // Auto-play (10 segundos)
  function startAutoPlay() {
    stopAutoPlay(); // evita múltiplos timers
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
  }

  // Eventos dos botões
  prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoPlay(); // reinicia o timer
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoPlay(); // reinicia o timer
  });

  // Inicia carrossel
  showImage(current);
  startAutoPlay();
});

// Menu responsivo
const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menu-list");

hamburger.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
