function operacionesBasicas() {
    primerValor = prompt("Ingrese el primer valor para operar");
    SegundoValor = prompt("Ingrese un segundo valor");
    
    primerValorParse = parseInt(primerValor);
    segundoValorParse = parseInt(SegundoValor);
    
    suma = primerValorParse + segundoValorParse
    resta = primerValorParse - segundoValorParse
    multiplicacion = primerValorParse * segundoValorParse
    division = primerValorParse / segundoValorParse
    
    alert(`La suma es ${suma}`);
    alert(`La resta es ${resta}`);
    alert(`La multiplicación es ${multiplicacion}`);
    alert(`La división es ${division}`);
}

function numeroMayor(primerValor, SegundoValor)   {
    if (primerValor > SegundoValor) {
        alert(`El mayor valor ingresado es ${primerValor}`);
    }
}

function numeroMenor(primerValor, segundoValor, tercerValor)   {

    if(primerValor < segundoValor && primerValor < tercerValor) {
        alert(`El menor valor ingresado es ${primerValor}`);
    }
    else {
        if(primerValor < segundoValor && tercerValor < primerValor) {
            alert(`El menor valor ingresado es ${tercerValor}`);
        }
        else {
            if(segundoValor < primerValor && segundoValor < tercerValor) {
                alert(`El menor valor ingresado es ${segundoValor}`);
            }
            else {
                if(segundoValor < primerValor && tercerValor < segundoValor) {
                    alert(`El menor valor ingresado es ${tercerValor}`);
                }
                else {
                    if(tercerValor < primerValor && tercerValor < segundoValor) {
                        alert(`El menor valor ingresado es ${tercerValor}`);
                    }
                    else {
                        if(tercerValor < primerValor && segundoValor < tercerValor) {
                            alert(`El menor valor ingresado es ${tercerValor}`);
                        }
                    }
                }
            }
        }
    }
    
}


function esPar(numero) {
    if(numero % 2 == 0 ){
        alert(`El numero ingresado es ${numero} es par`);
    }
    else {
        alert(`El numero ingresado es ${numero} es impar`);
    }
}


function cuadradoNumero(numero) {
    cuadrado = numero * numero;
    alert(`El numero ingresado es ${numero} elevado al cuadrado, da ${cuadrado}`)  
}


function areaTriangulo(base,altura) {
    area = (base * altura) / 2
    alert(`El area del triangulo es: ${area}`);
}

function metrosaCentimetros(metro) {
    centimetros = metro * 100;
    alert(`El valor ingresado es ${metro} m que corresponde a ${centimetros} cm`)
}

function anoNacimiento(edad, anoActual) {
    anoDeNacimiento =  anoActual - edad;
    alert(`El año de nacimiento es de ${anoDeNacimiento}`);
}

function inversion(saldoInicial, tiempoInversion) {

    meses = tiempoInversion * 12

    ganancia = (saldoInicial * 0.02) * meses

    alert(`La ganancia obtenida de la inversión inicial es de ${ganancia} pesos`)
}

function promedioAlumno(calificaciones) {

    sumaNotas = 0;
    calificaciones.forEach((calificacion) => {
        sumaNotas = sumaNotas + calificacion;
    });

    promedio = sumaNotas / 5;

    if(promedio > 1 && promedio < 2.9) {
        alert(`El estudiante reprueba con un promedio de ${promedio}`);
    }
    else if (promedio > 2.9 && promedio <= 5 ) {
        alert(`El estudiante aprueba con un promedio de ${promedio}`);
    }
    else {
        alert(`Los valores ingresados como calificaciones no estan dentro del rango de 1 a 5`)
    }

}


function descuentoFruteria(kilosManzanas) {
    
    if(kilosManzanas >= 0 && kilosManzanas <= 2) {
        costoManzanas = kilosManzanas * 4500;
    }
    else if (kilosManzanas >= 3 && kilosManzanas <= 5) {
        costoManzanas = (kilosManzanas * 4500) - ((kilosManzanas * 4500) * 0.10);  
    }
    else if (kilosManzanas >= 6 && kilosManzanas <= 10) {
        costoManzanas = (kilosManzanas * 4500) - ((kilosManzanas * 4500) * 0.15);  
    }
    else if (kilosManzanas >= 10) {
        costoManzanas = (kilosManzanas * 4500) - ((kilosManzanas * 4500) * 0.20);  
    }

    alert(`El valor de las manzanas corresponde a un precio de: ${costoManzanas} pesos`);
    
}