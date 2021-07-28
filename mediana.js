//Función de promedio

function calcularMediaAritmetica(lista) {

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

//Función de mediana

const lista = [1, 2, 3, 4, 5, 6];

const mitadLista = parseInt(lista.length / 2);
let mediana;

if (lista.length % 2 === 0) {
  const elemento1 = lista[mitadLista - 1];
  const elemento2 = lista[mitadLista];

  const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
  mediana = promedioElementos;
} else {
  mediana = lista[mitadLista];
}

console.log(mediana);
