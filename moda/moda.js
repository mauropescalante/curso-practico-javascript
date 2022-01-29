const lista1 = [
    4,2,3,4,2,3,1,4,5,6,4,2,3,4,1,6,5,8,10,
];

const lista1Count = {

};

lista1.map(
    function(elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
)

const lista1Array = Object.entries(lista1Count).sort(
    function(A, B) {
        return A[1] - B[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];