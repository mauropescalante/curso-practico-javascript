function calcularPrecioConDescuento(precio, descuento) {
    return precioConDescuento = (precio * (precio - descuento)) / 100;
};

function onClickButtonPriceDiscount() {
    const cupones = [
        {
            name: "uno",
            descuento: 10,
        },
        {
            name: "dos",
            descuento: 20,
        },
        {
            name: "tres",
            descuento: 30,
        },
    ];

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCupon = document.getElementById("InputCupon");
    const cuponValor = inputCupon.value;

    let descuento;

    const isCuponValorValid = function(cupon) {
        return cupon.name === cuponValor;
    }

    const userCupon = cupones.find(isCuponValorValid);

    if (!userCupon) {
        alert("El cupon " + cuponValor + " no es valido");
    } else {
        const descuento = userCupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultP");
        return resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
};