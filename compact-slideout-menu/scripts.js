const menu = document.getElementById("menu");

const slideout = () => {
  menu.classList.toggle("menushow");
}

menu.addEventListener("click", slideout);
