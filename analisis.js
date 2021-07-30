//Funciones helpers

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numero) {
  return numero % 2 === 0;
}

//Extraer salarios del array
const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

//Ordenar salarios
const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

//Hallar la mediana de los salarios

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    return calcularMediaAritmetica([personaMitad1, personaMitad2]);
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const  salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col
);