$(document).ready(function(){
  var altura = $('.contenedor-menu').offset().top;
  var ancho = $(window).width();

  if(ancho >= 900){
    $(window).on('scroll', function(){
      if($(window).scrollTop() > altura){
        $('.topmenu').addClass('quitarPadding')
        $('.topmenu').addClass('fijar')
        $('.titulo').addClass('ponerPadding')
      }else{
        $('.topmenu').removeClass('quitarPadding')
        $('.topmenu').removeClass('fijar')
        $('.titulo').removeClass('ponerPadding')
      }
    })
  }  
})