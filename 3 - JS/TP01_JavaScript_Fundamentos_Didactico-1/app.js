// ===== Actividad 1 =====
// Ej. 1 — Declarar un string, un number, un boolean, un array y un object, y mostrarlos con console.log.
let nombre = "Ezequiel";
let edad = 28;
let alumnoRegular = true;
let materias = ["Programación 3", "Metodología 1", "Ingles 2", "Bases De Datos 2"]; //Array
let alumno = { nombre: nombre, edad: edad, regular: alumnoRegular, materias: materias }; // objeto
console.log("Nombre: ", nombre);
console.log("Edad: ", edad);
console.log("¿Es alumno regular?: ", alumnoRegular);
console.log("¿Que materias cursa?: ", materias);
console.log("Datos Alumno: ", alumno);

// Ej. 2 — Usar typeof sobre cada una de esas variables para imprimir su tipo por consola.
console.log("Tipo de dato de nombre: ", typeof (nombre));
console.log("Tipo de dato de edad: ", typeof (edad));
console.log("Tipo de dato de alumnoRegular: ", typeof (alumnoRegular));
console.log("Tipo de dato de array materias: ", typeof (materias));
console.log("Tipo de dato de objeto alumno: ", typeof (alumno));

// Ej. 3 — Declarar una variable con const y comentar (o probar) qué pasa si se intenta reasignarla
const universidad = "UTN";
console.log("Universidad: ", universidad);

// Si descomento la siguiente línea, da error:
// universidad = "UTENENE";
// TypeError: Assignment to constant variable.
// Esto pasa porque const no permite reasignar el valor una vez declarado.

// ===== Actividad 2 =====
// Ej. 4 — Con dos números, mostrar suma, resta, multiplicación, división y módulo (%).
let a = 6;
let b = 7;

console.log("Suma: ", a + b);
console.log("Resta: ", a - b);
console.log("Multiplicacion: ", a * b);
console.log("Division: ", a / b);
console.log("Modulo: ", a % b);

// Ej. 5 — Comparar "5" == 5 contra "5" === 5 (y otro caso) con console.log.
let cincoStr = "5";
let cincoNum = 5;
console.log("Comparacion '5' == 5:", cincoStr == cincoNum);
console.log("Comparacion '5' === 5:", cincoStr === cincoNum);

// Ej. 6 — Con if/else, verificar si un número es par o impar usando el módulo.
if (cincoNum % 2 == 0) {
    console.log("El número " + cincoNum + " es un número PAR");
} else {
    console.log("El número " + cincoNum + " es un número IMPAR");
}

// Ej. 7 — Con un bucle for, recorrer un array e imprimir cada elemento con su índice.
materias.forEach((materia, i) => {
    console.log("Materia " + i + ": " + materia + "."
    )
});

for (let i = 0; i < materias.length; i++) {
    console.log("Materia " + i + ": " + materias[i] + ".");
}
// Ej. 8 — Con un bucle while, imprimir los números del 1 al 5
let n = 1;
while (n < 6) {
    console.log(n);
    n++;
}