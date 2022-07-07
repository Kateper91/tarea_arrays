function capturar(){
    function Producto(producto, cantidad){
        this.producto=producto;
        this.cantidad=cantidad;
    }
    const nombreCapturar = document.getElementById("producto").value;
    const cantidadCapturar = document.getElementById("cantidad").value;
    
    nuevoProducto = new Producto(nombreCapturar,cantidadCapturar);
    agregar();
}

const baseDatos = [];
function agregar(){
    baseDatos.push(nuevoProducto);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoProducto.producto+'</td><td>'+nuevoProducto.cantidad+'</td></tbody>';
    console.log(baseDatos)
};