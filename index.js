let precio = 400000;
let total = 0;

let precioSpan = document.getElementById("precioInicial");
precioSpan.innerHTML = precio;
let totalSpan = document.getElementById("valorTotal");
totalSpan.innerHTML = total;
let cantidadActual = document.getElementById("cantidad");
let btnMinus = document.getElementById("btnMinus");
let btnPlus = document.getElementById("btnPlus");


btnMinus.addEventListener("click", function(e){
    let nuevaCantidad = Number(cantidadActual.innerHTML) -1;
    if (nuevaCantidad < 0){nuevaCantidad = 0};
    cantidadActual.innerHTML = nuevaCantidad;
    totalSpan.innerHTML = nuevaCantidad * precio;
});

btnPlus.addEventListener("click", function(e){
    let nuevaCantidad = Number(cantidadActual.innerHTML) +1;
    cantidadActual.innerHTML = nuevaCantidad;
    totalSpan.innerHTML = nuevaCantidad * precio;
});