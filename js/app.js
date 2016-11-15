var barraProgreso= function(){
	barraUno.value+=5;
	barra.value += 5;
	barraDos.value+= 5;
	barraTres.value +=5;
	barraCuatro.value +=5;
	barraCinco.value +=5;
}

$(document).ready(function(){
	$(".icono").click(function(){
		if(contadorUno === 1){
			$("#menu").removeClass("none").addClass("slideInLeft animated");
			$("header").addClass("none");
			$("#perfil").addClass("none");
			contadorUno++;
		}else{
			$("#menu").addClass("none");
			$("header").removeClass("none").addClass("slideInLeft animated");
			$("#perfil").addClass("none");
			contadorUno=1;
		}
	});
	$(".rigth").click(function(e){
		e.preventDefault();
		if(contadorDos === 1){
			$("#perfil").removeClass("none").addClass("slideInRight animated");
			$("header").addClass("none");
			$("#menu").addClass("none");
			contadorDos++;
		}else{
			$("#perfil").addClass("none");
			$("header").removeClass("none").addClass("slideInRight animated");
			$("#menu").addClass("none");
			contadorDos=1;
		}
	})

	setInterval(barraProgreso, 100);
})

var contadorUno= 1;
var contadorDos= 1;

var barra= document.getElementById("barrastyle");
var barraUno= document.getElementById("barrastyleUno");
var barraDos= document.getElementById("barrastyleDos");
var barraTres= document.getElementById("barrastyleTres");
var barraCuatro= document.getElementById("barrastyleCuatro");
var barraCinco= document.getElementById("barrastyleCinco");