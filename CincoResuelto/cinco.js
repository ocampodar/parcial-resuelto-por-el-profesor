/*Bienvenidos (SOLO SWITCH). 
una empresa de viajes le solicita ingresar que continente 
le gustaria visitar 
y la cantidad de dias , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras 
Si es america tiene un 50% de porcentaje y si ademas paga por debito se le agrega un 10% mas de porcentaje 
Si es africa tiene un 60% de porcentaje y si ademas paga por mercadoPago o efectivo se le agrega un 15% mas de porcentaje 
Si es europa tiene un 20% de porcentaje y si ademas paga por debito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 
cualquier otro continente tiene un recargo del 20%*/

function mostrar()
{
	var continente = document.getElementById("Continente").value;
	var cantidadDias = parseInt(prompt("Ingrese la cantidad de días:"));
	var metodoDePago = document.getElementById("MedioDePago").value;
	var porcentaje = 0;
	var precioPorDia = 100;
	var precioInicial = 0;
	var precioFinal = 0;
	var descuentoText = "porcentaje";

	precioInicial = precioPorDia * cantidadDias;

	switch(continente){
		case "América":

			porcentaje = 50;
						
			switch(metodoDePago){
				case "Débito":
					porcentaje += 10;
					//porcentaje = porcentaje + 10;										
				break;
			}
			
		break;

		case "África":
			porcentaje = 60;
			
			switch(metodoDePago){
				case "MercadoPago":				
				case "Efectivo":
					porcentaje = porcentaje + 15;										
				break;
			}
		break;

		case "Europa":
			porcentaje = 20;
			
			switch(metodoDePago){
				case "Debito":
					porcentaje = porcentaje + 15;
				break;				
				case "MercadoPago":
					porcentaje = porcentaje + 10;										
				break;
				default:
					porcentaje = porcentaje + 5;	
				break;
			}
		default:
			porcentaje = -20;
			descuentoText = "aumento";
		break;
	}	

	precioFinal = precioInicial - precioInicial * porcentaje / 100;

	alert("Precio inicial: " + precioInicial + 
		". Porcentaje de " + descuentoText + " : " + Math.abs(porcentaje) + "%. Precio final: " 
		+ precioFinal);
}




/*var precioPorDia = 100;
	var continente = document.getElementById("Continente").value;
	var medioDePago = document.getElementById("MedioDePago").value;
	var cantidadDias = parseInt(prompt("Ingrese la cantidad de días"));
	var precioInicial = cantidadDias * precioPorDia;
	var precioFinal = 0;
	var porcentaje = 0;

	switch(continente)
	{
		case "América":
			porcentaje = 50;

			switch(medioDePago){
				case "Débito":
					porcentaje += 10;
				break;		
			}
		break;

		case "África":
			porcentaje = 60;

			switch(medioDePago){
				case "MercadoPago":
				case "Efectivo":
					porcentaje += 15;
				break;		
			}
		break;
	}


	precioFinal = precioInicial - precioInicial*porcentaje/100;
*/