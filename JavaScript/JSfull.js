// JavaScript Document
var lista=["banner1.jpg","banner2.jpg","banner3.jpg"];
var i=0;
var rotacion;
function carrusel(){
	document.getElementById("imgbaner").src="../Imagenes/banner/"+lista[i];
	i++;
	if(i>=lista.length) i=0;
	rotacion=setTimeout("carrusel()",1500);
}
function cambiaratras(){
	if( i > 0) {
		document.getElementById("imgbaner").src="../Imagenes/banner/"+lista[i - 1];
		i--;
	}else {
		document.getElementById("imgbaner").src="../Imagenes/banner/"+lista[lista.length - 1];
		i = lista.length-1;
	}
}
function cambiaradelante(){
	if(i < lista.length -1) {
		document.getElementById("imgbaner").src="../Imagenes/banner/"+lista[i + 1];
		i++;
	}else {
		document.getElementById("imgbaner").src="../Imagenes/banner/"+lista[0];
		i = 0;
	}
}
//para que funcione todo
$(document).ready(function(){
	carrusel();
	
	$(".imgFooter").mouseover(function(){        //va anclado al nombre de la clase y es mas facil manupular datos
		
		$(this).css("transform","rotateY(180deg)");
		$(this).css("transition","all 0.5s");
	});
	
	
	$(".imgFooter").mouseout(function(){
		
		$(this).css("transform","rotateY(0deg)");
		$(this).css("transition","all 0.5s");
	});
	
	$(".card-img-top").mouseover(function(){
		$(this).css("opacity","0.5");
		$(this).css("transition","all 0.5s");
		
	});
	
	$(".card-img-top").mouseout(function(){
		$(this).css("opacity","1.0");
		$(this).css("transition","all 0.5s");
		
	});
	
		$(".onclick").click(function(){
		$.each($(".onclick"), function(){
			
			$(this).css("background-color","white");
			$(this).css("color","black");
		});
		
			$(this).css("background-color","#2DD0DD");
			$(this).css("color","white");
		

		
	});
	
});





