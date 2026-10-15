let totalCompra = 120000;
let esCliente = true;
    
let descuento = 0;
let totalFinal = 0;

if (totalCompra > 100000) {
    if (esCliente){
        descuento = 20;
    }else {
        descuento = 10;
    }
}else { 
    if (esCliente) {
        descuento = 5;
    }else {
        descuento = 0;
    }
}

totalFinal = totalCompra - (totalCompra * descuento / 100);
console.log ("Descuento aplicado" + descuento + "%");
console.log ("Total final a pagar" + totalFinal);