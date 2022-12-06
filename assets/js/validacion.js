/* Angel Gabriel Piste Santiago */
function valida_envia(){
  if( document.contenedorformulario.name.value.length==0){
    ele = document.getElementById('input1') 
    ele.className += "errorInput";
    ele.innerHTML = "¡Ups! Proporcionanos tu nombre"
    document.contenedorformulario.name.focus()
    return 0;
  }else{
    ele = document.getElementById('input1')
    ele.className="ocultaError"
  }


  if( document.contenedorformulario.email.value.length==0){
    
    ele = document.getElementById('input2')
    ele.className += "errorInput";
    ele.innerHTML = "¡Te hizo falta un email!"
    document.contenedorformulario.email.focus()
    return 0;
  }else{
    ele = document.getElementById('input2')
    ele.className="ocultaError"
  }


  if( document.contenedorformulario.textArea.value.length==0){
    ele = document.getElementById('input3')
    ele.className += "errorInput";
    ele.innerHTML = "¡Ups! te hizo falta tu mensaje, escribelo.."
    document.contenedorformulario.textArea.focus()
    return 0;
  }else{
    ele = document.getElementById('input3')
    ele.className="ocultaError"
  }
  //si todos los campos se han validado correctamente el formulario se debe de enviar.
  document.contenedorformulario.submit();
}