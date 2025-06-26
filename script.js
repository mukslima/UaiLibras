document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-images img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) img.classList.add("active");
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  showImage(current);
});

// Modal
const modal = document.getElementById("modal");
const abrirBtn = document.getElementById("abrirModal");
const fecharBtn = document.querySelector(".fechar");

abrirBtn.onclick = () => modal.style.display = "flex";
fecharBtn.onclick = () => modal.style.display = "none";

// Fecha modal clicando fora do conteúdo
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
