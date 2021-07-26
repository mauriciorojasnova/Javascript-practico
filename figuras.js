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

//Código triángulo isóceles.

console.group("Triángulos isóceles");

function determinarTipo(ladoTrianguloIso1, ladoTrianguloIso2) {
    if (ladoTrianguloIso1 === ladoTrianguloIso2){
        return "Es un triángulo isóceles";
    } else {
        return "No es un triángulo isóceles";
    }
}

function calcularAlturaTriangulo(ladoTrianguloIso1, baseTrianguloIso) {
    const altura = Math.sqrt(ladoTrianguloIso1**2 - ((baseTrianguloIso/2)**2))
    return altura;
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
    return PI*(radioCirculo*radioCirculo);
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

//Interacción HTML triángulo Isóceles.

function determinarTipoTriangulo() {
    const inputLadoUnoIso = document.getElementById("InputLadoUnoIso");
    const inputLadoDosIso = document.getElementById("InputLadoDosIso");
    const valueIso1 = Number(inputLadoUnoIso.value);
    const valueIso2 = Number(inputLadoDosIso.value);
    const tipoTriangulo = determinarTipo(valueIso1, valueIso2);
    alert(tipoTriangulo)
}

function determinarAlturaTriangulo() {
    const inputLadoUnoIso = document.getElementById("InputLadoUnoIso");
    const inputBaseIso = document.getElementById("InputBaseIso");
    const valueIso1 = Number(inputLadoUnoIso.value);
    const valueBaseIso = Number(inputBaseIso.value);
    const altura = calcularAlturaTriangulo(valueIso1, valueBaseIso);
    alert(altura);
}

//Interacción HTML círculo.

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}