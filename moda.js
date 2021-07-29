const lista = [
    1,
    2,
    3,
    4,
    1,
    2,
    2
];

const listaCount = {};

lista.map(
    function (elemento){
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
        listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount.sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor;
    }
);
console.log(listaArray)
