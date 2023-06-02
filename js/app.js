const burger = document.getElementById('burger');
const nav = document.getElementById('closebtn');

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }
  
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

burger.addEventListener('click', openNav);
nav.addEventListener('click', closeNav);