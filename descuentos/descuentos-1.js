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

    switch(cuponValor) {
        case cupones[0]:
            descuento = 10;
            console.log(descuento);
        break;
        case cupones[1]:
            descuento = 20;
            console.log(descuento);
        break;
        case cupones[2]:
            descuento = 30;
            console.log(descuento);
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    return resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

};