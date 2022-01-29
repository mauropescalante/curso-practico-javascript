
function calculaMediaAritmetica(lista) {

    const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
            console.log(valorAcumulado);
            console.log(nuevoElemento);
            return valorAcumulado + nuevoElemento;
        });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
