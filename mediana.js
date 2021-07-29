//Función de promedio

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

//Función de mediana

function calcularMediana(lista) {

  lista.sort();
  const mitadLista = parseInt(lista.length / 2);
  let mediana;

  if (lista.length % 2 === 0) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
    return mediana = promedioElementos;
  } else {
    return mediana = lista[mitadLista];
  }
}

console.log(calcularMediana([2,4,5,1,6,3]))


