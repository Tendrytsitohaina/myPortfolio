
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        let start = window.scrollY;
        let end = targetSection.offsetTop - 50; // ajuste -50 si tu as une navbar fixe
        let distance = end - start;
        let step = distance / 50; // vitesse (plus grand = plus rapide)
        let count = 0;

        let scroller = setInterval(() => {
          count++;
          window.scrollTo(0, start + step * count);

          // stop quand on arrive au bout
          if (count >= 50) {
            clearInterval(scroller);
            window.scrollTo(0, end); // sécurité pour bien s'arrêter
          }
        }, 10); // chaque 10ms
      }
    });
  });
});