let decision= prompt('Bienvenid@ a tu lista de compras. Por favor ingresa 1 si quieres agregar un producto a tu lista, 2 para eliminar un producto de tu lista o 3 para ver tu lista de compras');
const fruit=[];
const candy=[];
const dairy=[];
const meat =[];

function agregarProducto(){
while (parseInt(decision) === 1 ){
    let  nuevoProducto = prompt('Escribe el nombre del producto que quieras agregar (Por favor ingresa el texto en minuscula');
    let categoria = prompt ('A que categoria quieres agregar el producto: fruit, candy, dairy, meat');
    console.log(categoria);
    
    switch (categoria){
        case "fruit":
            fruit.push(nuevoProducto);
            console.log(fruit);
            break;

        case "candy":
            candy.push(nuevoProducto);
            console.log(candy);
            break;

        case "dairy":
            dairy.push(nuevoProducto);
            console.log(dairy);
            break;

        case "meat":
            meat.push(nuevoProducto);
            console.log(meat);
            break;               
  }
  decision = prompt('Quieres ingresar un nuevo producto a tu lista? Por favor ingresa 1 si quieres agregar un elemento a tu lista o 2 para eliminar un elemento de tu lista');
  if (parseInt(decision) === 2) {
    alert(`Esta es tu lista de compras:\n  Frutas: ${fruit.join()},\n Lacteos: ${dairy.join()},\n Dulces: ${candy.join()},\n Carnes:${meat.join()}`);
  }

}

}

function eliminarProducto(){
    while (parseInt(decision)===2){
        let productoEliminar = prompt('Escribe el nombre del producto que quieres eliminar (Recuerda ingresar el texto en minuscula)');
        let indice = fruit.ty
    }
}

