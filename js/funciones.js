document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for(var i=0; i<animado.length; i++){
    let alturaAnimado = animado[i].offsetTop;
    if(alturaAnimado - 350 < scrollTop){
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarArriba");
    }
  }
}

window.addEventListener('scroll',mostrarScroll);