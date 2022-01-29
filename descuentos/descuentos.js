function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    const resultP = document.getElementById("ResultP")
    return resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

};

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const priceDiscount = inputDiscount.value;

    // alert(calcularPrecioConDescuento(priceValue, priceDiscount));
};