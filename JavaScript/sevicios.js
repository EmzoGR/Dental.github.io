// JavaScript Document

$(document).ready(function(){

	
	$(".imgFooter").mouseover(function(){        //va anclado al nombre de la clase y es mas facil manupular datos
		
		$(this).css("transform","rotateY(180deg)");
		$(this).css("transition","all 0.5s");
	});
	
	
	$(".imgFooter").mouseout(function(){
		
		$(this).css("transform","rotateY(0deg)");
		$(this).css("transition","all 0.5s");
	});
	
	$(".img2").mouseover(function(){        //va anclado al nombre de la clase y es mas facil manupular datos
		
		$(this).css("opacity","0.5");
		$(this).css("transition","all 0.5s");
	});
	
	
	$(".img2").mouseout(function(){
		
		$(this).css("opacity","1.5");
		$(this).css("transition","all 0.5s");
	});
	

	$(".img1").mouseover(function(){        //va anclado al nombre de la clase y es mas facil manupular datos
		
		$(this).css("opacity","0.5");
		$(this).css("transition","all 0.5s");
	});
	
	
	$(".img1").mouseout(function(){
		
		$(this).css("opacity","1.5");
		$(this).css("transition","all 0.5s");
	});
	
	
	
});