//Cupones con descuento

//Funcion del cupon

function descuentoDelCupon(cuponValue) {
    if (cuponValue === "bronce") {
        return 20;
    } else if (cuponValue === "plata") {
        return 30;
    } else if (cuponValue === "oro") {
        return 40;
    } else {
        alert("Cupón no válido, el descuento es de 0")
        return 0;
    }
}

//Funcion precio con descuento.

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = precio*porcentajePrecioDescuento/100;
    return precioConDescuento;
}

//Unión con HTML

function priceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    const discountValue = descuentoDelCupon(cuponValue)

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const finalPriceMessage = document.getElementById("finalPriceMessage");
    finalPriceMessage.innerText = "El precio con descuento es: $" + precioConDescuento;

}