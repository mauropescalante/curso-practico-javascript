function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = precio - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

function onClickButtonPriceDiscount() {
    const cupones = [
        "uno",
        "dos",
        "tres",
    ];

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCupon = document.getElementById("InputCupon");
    const cuponValor = inputCupon.value;

    let descuento;

    if (!cupones.includes(cuponValor)) {
        alert("El cupon " + cuponValor + " no es valido");
    } else if (cuponValor === "uno") {
        descuento = 10;
    } else if (cuponValor === "dos") {
        descuento = 20;
    } else if (cuponValor === "tres") {
        descuento = 30;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    return resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

};