 /*Es una función borrar, corresponde al boton Borrar*/
 function borrar(){
    document.getElementById('totalCompra').innerHTML="Total a Pagar: $";
}

 /*Es una función resume, corresponde al boton Resume*/
function resume(){
var cantidad= document.getElementById('cantidadEntrada').value;
var categorias= document.getElementById('categoria').value;
var total=Number;
console.log(cantidad);
    if(categorias=="estudiante"){
      total=40*cantidad;//160 representa el 80%
    }else{
          if(categorias=="trainne"){
          total=100*cantidad;//100 representa el 50%
          }else{
                if(categorias=="junior"){
                total=170*cantidad;//100 representa el 15%
                }
          }
    }
  document.getElementById('totalCompra').innerHTML="Total a Pagar: $"+total;
}
//document.getElementById('totalCompra').addEventListener('click',resume);
 //hola