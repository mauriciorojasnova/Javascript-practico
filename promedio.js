function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function calcularMediaGeometrica(lista) {
  const multiplicacionLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado * nuevoElemento;
  });

  const promedioGeometricoLista = (multiplicacionLista)**(1/lista.length);

  return promedioGeometricoLista;
}
