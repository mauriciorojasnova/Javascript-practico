//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado*4;
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado*ladoCuadrado;
}

console.groupEnd();

//Código del triángulo

console.group("Triángulos");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo*alturaTriangulo)/2;
}

console.groupEnd();

//Código del círculo
console.group("Círculos");

function diametroCirculo(radioCirculo) {
    return radioCirculo*2;
}

const PI = Math.PI;

function perimetroCirculo(radioCirculo) {
    const diametro = diametroCirculo(radioCirculo)
    return diametro*PI;
}

function areaCirculo(radioCirculo) {
    return PI*(radioCirculo**radioCirculo);
}

console.groupEnd();

//Interacción cuadrado con HTML 

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Interacción HTML triángulo.

function calcularPerimetroTriangulo() {
    const inputLadoUno = document.getElementById("InputLadoUno");
    const inputLadoDos = document.getElementById("InputLadoDos");
    const inputBase = document.getElementById("InputBase");
    const value1 = Number(inputLadoUno.value);
    const value2 = Number(inputLadoDos.value);
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBase");
    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = inputAltura.value;
    const valueBase = inputBase.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}