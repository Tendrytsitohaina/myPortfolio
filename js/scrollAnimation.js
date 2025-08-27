document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-anim");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Pour animer une seule fois
        }
      });
    }, { threshold: 0.2 });
  
    elements.forEach(el => observer.observe(el));
  });