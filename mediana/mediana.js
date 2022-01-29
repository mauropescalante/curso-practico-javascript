const lista1 = [
    100,
    200,
    500,
    600,
    4000000,
];

const mitadLista1 = lista1.length / 2;

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

let mediana;

if (esPar(lista1.length)) {
    mediana = (Number(lista1[mitadLista1-1]) + Number(lista1[mitadLista1]))/2;
} else {
    mediana = lista1[Math.floor(mitadLista1)];
};