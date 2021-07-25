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
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
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