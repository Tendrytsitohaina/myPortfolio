

function toogleToDark(){
  if(document.body.classList.contains("light-mode")){
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
}

function toogleToLight(){
  if(document.body.classList.contains("dark-mode")){
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
}
