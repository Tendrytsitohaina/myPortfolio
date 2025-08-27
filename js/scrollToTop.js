

mybutton = document.getElementById("scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = 1;
} else {
    mybutton.style.opacity = 0;
}
}

// When the user clicks on the button, scroll to the top of the document
function scrollTotopFunction() {
    
    const startPosition = window.scrollY || document.documentElement.scrollTop;
    const duration = 500;
    let start = null;

    function animationStep(timestamp){
        if(!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1);

        window.scrollTo(0, startPosition * (1 - percent));
        if(progress < duration){
            requestAnimationFrame(animationStep);
        }
    }
    requestAnimationFrame(animationStep)
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-anim");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Pour animer une seule fois
        }
        else{
            entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.2 });
  
    elements.forEach(el => observer.observe(el));
});
