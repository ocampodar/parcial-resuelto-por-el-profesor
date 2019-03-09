/*Realizar el algoritmo que permita iterar el 
ingreso de dos datos, una letra y un número entre -100 
y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
	var letra;
	var numero;
	var cantidadImpares = 0;
	var cantidadPares = 0;
	var cantidadCeros = 0;
	var promedio;
	var cantidadPositivos = 0;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var numMax; //numero máximo
	var numMin; //numero mínimo
	var letraMax; //letra del numero maximo
	var letraMin; //letra del numero minimo
	var esPrimeraIteracion = 1; //esPrimeraIteracion = 1;

	do
	{
		letra = prompt("Ingrese una letra:");
		numero = parseInt(prompt("Ingrese un número:"));

		while(isNaN(numero) || numero < -100 || numero > 100){
			numero = parseInt(prompt("ERROR. Ingrese un número válido:")); 
		}

		 //Evaluo si es cero.
		if(numero == 0){
			cantidadCeros++;
		}
		else
		{
			//Evaluar positivos y negativos
			if(numero > 0){
				cantidadPositivos++;
				sumaPositivos = sumaPositivos + numero;
			}
			else{
				sumaNegativos = sumaNegativos + numero;
			}

			//Evaluo pares e impares. 
			if(numero % 2 == 0){
				cantidadPares++;
			}
			else{
				cantidadImpares++;
			}
		}

		if(esPrimeraIteracion || numero > numMax){
			numMax = numero;
			letraMax = letra;
			
		}

		if(esPrimeraIteracion || numero < numMin){
			numMin = numero;
			letraMin = letra;
			esPrimeraIteracion = false;
		}
	}while(confirm("¿Desea seguir ingresando?"));
	
	if(cantidadPositivos > 0){
		promedio = sumaPositivos / cantidadPositivos;
	}

	document.write("Cantidad de Pares: " + cantidadPares + "</br>" +
				"Cantidad de Impares: " + cantidadImpares + "</br>" +
				"Cantidad de Ceros: " + cantidadCeros + "</br>" +
				"Promedio Positivos: " + promedio + "</br>" +
				"Suma Negativos: " + sumaNegativos + "</br>" +
				"Numero y letra Max: " + numMax + " " + letraMax + "</br>" +
				"Numero y letra Min: " + numMin + " " + letraMin + "</br>")




}
