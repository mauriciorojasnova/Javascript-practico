//Funcion precio con descuento.

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = precio*porcentajePrecioDescuento/100;
    return precioConDescuento;
}