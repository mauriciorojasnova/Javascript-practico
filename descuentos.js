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
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const finalPriceMessage = document.getElementById("finalPriceMessage");
    finalPriceMessage.innerText = "El precio con descuento es: $" + precioConDescuento;

}