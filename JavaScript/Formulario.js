// JavaScript Document
function validar(){
 var nombre,apellidos,correo,usuario,clave,telefono,expre;
 
 nombre = document.getElementById("nombre").value; 
 apellidos = document.getElementById("apellidos").value;
 correo = document.getElementById("email").value;
 usuario = document.getElementById("usuario").value;
 clave = document.getElementById("clave").value;
 telefono = document.getElementById("telefono").value;
  
 expre= /\w+@\w+\.+[a-z]/;	

 if(nombre==="" || apellidos==="" || correo==="" || usuario==="" || clave==="" || telefono==="")
	 {alert("Todos los campos son obligatorios");
	 return false;}
 
 else if(nombre.length>10)  {alert("El nombre es muy largo");return false;}
 
  else if(apellidos.length>10) {alert("Los apellidos son demasiado largos");return false;}
 
  else if(correo.length>30) {alert("El correo es muy largo");return false;}
  else if(!expre.test(correo)) {alert("El correo ingresado no es válido"); return false;}
 
  else if(usuario.length>10 || clave.length>10){alert("El usuario y la clave solo deben tener 10 caráteres como máximo"); return false;}
 
 else if(telefono.length>9 || telefono.length<9) {alert("El número es incorrecto"); return false;}
 
  else if(isNaN(telefono)) {alert("El telefono ingresado no es un número"); return false;}
 
	else
	{	alert("Datos enviados exitosamente");}
}

$(document).ready(function(){
	
	$("h1").click(function(){
		
		$("form").fadeToggle("slow");
		
	});
	
 
	
	
	
});


