/* Angel Gabriel Piste Santiago */
var fondomodal =document.getElementById("modal");
var btn = document.getElementById("boton-modal");
var cerrar = document.getElementById("cerrarbtn");

btn.onclick = function (){
  fondomodal.style.display="block";
};
cerrar.onclick = function (){
  fondomodal.style.display="none";
};
window.onclick = function (event){
  if(event.target == fondomodal) {
    fondomodal.style.display="none";
  };
};
