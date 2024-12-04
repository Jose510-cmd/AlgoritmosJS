// 1. Algoritmo que realice la suma entre dos numeros dados por el usuario
function suma() {
    // Pedimos los numero al usuario
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    console.log(`La suma es ${numero1 + numero2}`);
    alert(`La suma es ${numero1 + numero2}`);
}

// 2. Algoritmo que determina la suma, resta, multiplicacion y division de dos numeros datos por el usuario
function operacionMatematicas() {
    // Se piden los valores al usurio
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

    // Hacemos las respectivas operaciones
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    // Se muestran los resultados por pantalla
    console.log(`La suma es = ${suma}, la resta es = ${resta}, la multiplicacion es = ${multiplicacion}, la division es = ${division}`);
    alert(`La suma es = ${suma}, la resta es = ${resta}, la multiplicacion es = ${multiplicacion}, la division es = ${division}`);
}

// 3. Algoritmo que calcula el cuadrado de un numero dado por el usuario
function cuadrado() {
    // Pedimo el numero al usuario
    let numero = parseInt(prompt('Ingrese un numero: '));

    // Se imprimen los resultados por pantalla
    console.log(`El cuadrado es ${numero**2}`);
    alert(`El cuadrado es ${numero**2}`);

}

// 4. Algoritmo que determine el area de un triagunlo a partir de la base y la altura ingresada por el usuario
function areaTriangulo() {
    // Se le piden los datos al usuario
    let base = parseInt(prompt("Ingrese la medida de la base del triangulo en cm: "));
    let altura = parseInt(prompt("Ingrese la medida de la altura del triangulo en cm: "));

    // Se pocesan los datos
    let area = (base * altura) / 2;

    // Se imprimen los resultados
    console.log(`El triangulo tiene un area de ${area}cm.`);
    alert(`El triangulo tiene un area de ${area}cm.`);
}


// 5. Algoruitmo que determine la conversion en kilometros, pulgadas y metros de un valor dado en centuimetros por el usuario
function conversionMedidas() {
    // Se le pide el valor en centimetros al usuario
    let medida = parseInt(prompt('Ingrese la medida en centimetros(cm): '));

    // Se calcula la conversion de las demas medidad
    let kilometros = medida * 0.00001;
    let pulgadas = medida * 0.3937;
    let metro = medida * 0.01;

    // Se imprimer los resultados
    console.log(`${medida}cm son: ${kilometros}km, ${pulgadas}in, ${metro}m`);
    alert(`${medida}cm son: ${kilometros}km, ${pulgadas}in, ${metro}m`);

}

// 6. Algoritmo que determine el numero mayor entre dos numeros dados por el usuario
function numeroMayor() {
    // Obtenemos el input del usuario
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

    // Se comparan ambos numeros y se imprime el mensaje correspondiente
    if (numero1 >= numero2) {
        console.log(`${numero1} es mayor que ${numero2}`);
        alert(`${numero1} es mayor que ${numero2}`);
    } else {
        console.log(`${numero2} es mayor que ${numero1}`);
        alert(`${numero2} es mayor que ${numero1}`);
    }
}


// 7. Algoritmo que determina el numero mayor entre 3 numeros ingresados por el usuario
function menorTres() {

    // Se le piden los datos al usuario
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    let numero3 = parseInt(prompt('Ingrese el tercer numero: '));

    // Hacemos las verificaciones e imprimimos los resutlados
    if (numero1 > numero2 && numero2 > numero3) {
        alert(`El numero menor es ${numero3}`);
        console.log(`El numero menor es ${numero3}`);
    } else if (numero2 > numero3 && numero3 > numero1) {
        alert(`El numero menor es ${numero1}`);
        console.log(`El numero menor es ${numero1}`);
    } else {
        alert(`El numero menor es ${numero2}`);
        alert(`El numero menor es ${numero2}`);
    }

}

// 8. Algoritmo que solicite al estudiante su nombre, la materia y 8 calificaciones de la misma
// Las calificaciones tienen un valor entre 1 y 10. Con la informacion proporcionada por el usuario
// Determinar si este aprovo la materia o no, teniendo en cuenta que se aprueba con 6.2
function aprovarMateria() {
    const numeroNotas = 8; // Se define una constante del numero de notas

    // Se le piden los datos al usuario
    let nombre = prompt('Ingrese su nombre: ');
    let materia = prompt('Ingrese el nombre de la materia: ')

    // Se declara una variable promedio para sumar las notas
    let promedio = 0;

    // Se itera con un ciclo for para pedir las notas al usuario y sumarlas al promedio
    for (let i = 0; i < numeroNotas; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}`));
        promedio += nota;
    }

    // Se calcula el promedio
    promedio /= numeroNotas;

    // Se verifica si el estudiante aprovo o desaprovo la materia
    if (promedio < 6.2) {
        prompt(`${nombre}  no aprovaste la materia ${materia}. Tu promedio fue de ${promedio}`)
    } else {
        prompt(`${nombre} felicidades aprovaste la materia ${materia}. Tu promedio fue de ${promedio}`)

    }

}

// 9. Algoritmo que determina si un numero ingresado por un usuario es par o impar
function parImpar() {
    // Le pedimos el numero al usuario
    let numero = parseInt(prompt('Ingresa el numero'));

    // Se hace la verificacion y se imprime el mensaje correspondiente
    if (numero % 2 != 0) {
        alert('El numero es impar.');
    } else {
        alert('El numero es par');
    }
}

// 10. Algoritmo para un individuo que desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numeros de años teniendo encuenta que pagan un interes mensual del 0,7%

function calcularBeneficio() {
    // Se le piden los datos al usuario
    let capitalInicial = parseFloat(prompt('Ingresa el capital que quieres invertir: $'));
    let anos = parseInt(prompt('Ingrese la cantidad de años que quiere invertir el capital: '));

    // Se calcula la cantidad de meses que va a estar invertido el dinero
    let meses = anos * 12;

    let interes = capitalInicial * 0.7;
    console.log(interes);
    // Se calcula el beneficio y el capital final
    let beneficio = interes * meses;
    let capitalFinal = capitalInicial + beneficio

    alert(`El capital final despues de ${anos} años de inversion(${meses} meses), es de \$${capitalFinal}. Por ende el beneficio es de \$${beneficio}`);
}

// 11. Algorimo que muestre los numero intermedios entre el rango de 2 numeros dados por el usuario
function rangoNumeros() {
    // se piden los datos al usuario
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

    let numeros = ""
        // Se imprimen los numero intermedios
    for (let numero = numero1 + 1; numero < numero2; numero++) {
        numeros += `${numero}, `;
    }

    alert(numeros)
}

// 12. Algoritmo que devuelva el resultado del factorial de un numero dado por el usuario
function factorialNumero() {
    // Se le piden los datos l usuario
    let numero = parseInt(prompt('Ingresa numero: '));

    alert(`El factorial es ${factorial(numero)}`);
}

function factorial(numero) {
    if (numero === 1) {
        return numero;
    }
    return numero * factorial(numero - 1);
}

// 13. Algoritmo que convierta un numero decimal a uno binario
function binario() {
    // Se le piden los datos al usuario
    let numero = parseInt(prompt('Ingresa un numero: '));

    // Se hace la conversion
    let bin = [];
    while (numero >= 1) {
        bin.unshift(numero % 2);
        numero = Math.floor(numero / 2);

    }

    // Se muestra el resultado
    alert(`El numero en binario es: ${bin.join("")}`);
}

function verificarPrimo() {
    // Se le pide al usuario un número
    let numero = parseInt(prompt('Ingresa un número para verificar si es primo:'));

    // Validación de entrada
    if (isNaN(numero)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    // Verificación de número primo
    if (numero <= 1) {
        alert(`El número ${numero} no es primo.`);
        return;
    } else if (numero === 2) {
        alert(`El número ${numero} es primo.`);
        return;
    } else if (numero % 2 === 0) {
        alert(`El número ${numero} no es primo.`);
        return;
    } else {
        let esPrimo = true;
        for (let i = 3; i <= Math.sqrt(numero); i += 2) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            alert(`El número ${numero} es primo.`);
        } else {
            alert(`El número ${numero} no es primo.`);
        }
    }
}

function calcularMCD() {
    // Se piden dos números al usuario
    let numero1 = parseInt(prompt('Ingresa el primer número:'));
    let numero2 = parseInt(prompt('Ingresa el segundo número:'));

    // Validación de entrada
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    // Función para calcular el MCD usando el algoritmo de Euclides
    function mcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Cálculo del MCD
    const resultadoMCD = mcd(numero1, numero2);

    // Mostrar el resultado al usuario
    alert(`El MCD de ${numero1} y ${numero2} es ${resultadoMCD}.`);
}


function calcularPotencia() {
    // Se pide la base y el exponente al usuario
    let base = parseFloat(prompt('Ingresa la base:'));
    let exponente = parseInt(prompt('Ingresa el exponente:'));

    // Validación de entrada
    if (isNaN(base) || isNaN(exponente)) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }

    // Cálculo de la potencia
    let resultado = Math.pow(base, exponente);

    // Mostrar el resultado al usuario
    alert(`El resultado de ${base} elevado a la ${exponente} es ${resultado}.`);
}

function calcularMCM() {
    let num1 = parseInt(prompt('Ingresa el primer número:'));
    let num2 = parseInt(prompt('Ingresa el segundo número:'));

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    function mcd(a, b) {
        return b === 0 ? a : mcd(b, a % b);
    }

    let mcm = Math.abs(num1 * num2) / mcd(num1, num2);
    alert(`El MCM de ${num1} y ${num2} es ${mcm}.`);
}


function calcularCuadradoCubo() {
    let numero = parseFloat(prompt('Ingresa un número:'));

    if (isNaN(numero)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    let cuadrado = Math.pow(numero, 2);
    let cubo = Math.pow(numero, 3);

    alert(`El cuadrado de ${numero} es ${cuadrado} y el cubo es ${cubo}.`);
}