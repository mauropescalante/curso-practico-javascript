// Codigo del cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
};
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2
};
console.groupEnd();


// Codigo del cirsulo
console.group("Circulo");
function diametroCirsuclo(radio) {
    return radio * 2;
};

const PI = Math.PI;
console.log("El valor de PI es: " + PI + "cm");

function perimetroCirculo(radio) {
    const diametro = diametroCirsuclo(radio);
    return diametro * PI;
};

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();


// Aqui interactuamos con HTML

// Cuadrado ----------------------------
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

// Triangulo ----------------------------
function calcularPerimetroTriangulo() {
    const inputL1 = document.getElementById("InputLado1");
    const valueL1 = inputL1.value;
    const inputL2 = document.getElementById("InputLado2");
    const valueL2 = inputL2.value;
    const inputB = document.getElementById("InputBase");
    const valueB = inputB.value;
    const inputA = document.getElementById("InputAltura");
    const valueA = inputA.value;

    const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
    alert(perimetro);
};

function calcularAreaTriangulo() {
    const inputB = document.getElementById("InputBase");
    const valueB = inputB.value;
    const inputA = document.getElementById("InputAltura");
    const valueA = inputA.value;

    const area = areaTriangulo(valueB, valueA);
    alert(area);
};

// Circulo ----------------------------
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
};