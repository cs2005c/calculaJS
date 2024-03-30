let contador = 0;
let valortotal = 0;
let totalCompra = 0;

function Multiplica(accion) {
    precio = 400000;

   
    precioSpan = document.querySelector('.precio-inicial');
    precioSpan.innerHTML=precio;

    if (accion=="S") {
            cantidadSpan = document.querySelector('.cantidad');
            contador++;
            cantidadSpan.innerHTML=contador; 
    } else {
            cantidadSpan = document.querySelector('.cantidad');
            contador--;
            if (contador<0) {contador=0;}
            cantidadSpan.innerHTML=contador; 
    }
totalCompra = document.querySelector('.valor-total');

    valortotal = Number(precio) * Number(contador);
    const f = new Intl.NumberFormat("es-CL",{style:'currency', currency:'CLP', minimumFractionDigits:0});
    totalCompra.innerHTML=f.format(valortotal);

}
    
