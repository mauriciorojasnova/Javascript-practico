//Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

//Código del triángulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm y " + baseTriangulo + " cm.");
console.log("La altura del tríangulo es: " + alturaTriangulo + " cm."); 

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2.")

console.groupEnd();

//Código del círculo
console.group("Círculos");

const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + " cm");
const diametroCirculo = radioCirculo*2;
console.log("El diametro del círculo es: " + diametroCirculo + " cm");
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

const perimetroCirculo = 2*radioCirculo*PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");


const areaCirculo = PI*(radioCirculo**radioCirculo);
console.log("El área del círculo es: " + areaCirculo + " cm");

console.groupEnd();