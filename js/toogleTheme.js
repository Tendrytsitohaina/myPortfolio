
document.addEventListener("DOMContentLoaded", function() {
  const btndark = document.getElementById("dark-btn");
  const btnlight = document.getElementById("light-btn");
  

  btndark.addEventListener("click", () => {
    if(document.body.classList.contains("light-mode")){
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    }
  });

  btnlight.addEventListener("click", () => {
    if(document.body.classList.contains("dark-mode")){
        document.body.classList.remove("daek-mode");
        document.body.classList.add("light-mode");
    }
  });
  
});
