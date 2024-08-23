let decision= prompt('Bienvenid@ a tu lista de compras. Por favor ingresa 1 si quieres agregar un producto a tu lista, 2 para eliminar un producto de tu lista o 3 para ver tu lista de compras');
const fruit=[];
const candy=[];
const dairy=[];
const meat =[];
const listas = [fruit, candy, dairy, meat];

function listaCompras(){
    while (parseInt(decision) === 1 ){
        let  nuevoProducto = prompt('Escribe el nombre del producto que quieras agregar (Por favor ingresa el texto en minuscula');
        let categoria = prompt ('A que categoria quieres agregar el producto: fruit🍉, candy🍩, dairy🥛, meat🍖');
        agregar(nuevoProducto, categoria);
        decision = prompt('Quieres ingresar un nuevo producto a tu lista? (ingresa 1 para "si" y  2 para "no")');
        if (parseInt(decision) === 2) {
            mostrar();
          }
    }

    while (parseInt(decision)===3){
        mostrar();
    }


}

//Funciones

//Agregar producto
function agregar(nuevoProducto, categoria){
    switch (categoria){
        case "fruit":
            if(fruit.indexOf(nuevoProducto)=== -1){
                fruit.push(nuevoProducto);
                alert('Producto agregado ✔');
            } else if (fruit.indexOf(nuevoProducto)>1){
                alert(`El producto ${nuevoProducto} ya existe en la categoria`)
            }
                break;

        case "candy":
            if(candy.indexOf(nuevoProducto)=== -1){
                candy.push(nuevoProducto);
                alert('Producto agregado ✔');
            } else if (candy.indexOf(nuevoProducto)>1){
                alert(`El producto ${nuevoProducto} ya existe en la categoria`)
            }
                break;

        case "dairy":
            if(dairy.indexOf(nuevoProducto)=== -1){
                dairy.push(nuevoProducto);
                alert('Producto agregado ✔');
            } else if (dairy.indexOf(nuevoProducto)>1){
                alert(`El producto ${nuevoProducto} ya existe en la categoria`)
            }
                break;

        case "meat":
            if(meat.indexOf(nuevoProducto)=== -1){
                meat.push(nuevoProducto);
                alert('Producto agregado ✔');
            } else if (meat.indexOf(nuevoProducto)>1){
                alert(`El producto ${nuevoProducto} ya existe en la categoria`)
            }
                break;  

    }
}

//Funcion mostrar producto

function mostrar(){
    alert(`Esta es tu lista de compras:\nFrutas: ${fruit.join()}\nLacteos: ${dairy.join()}\n Dulces: ${candy.join()}\n Carnes: ${meat.join()}`);
}

//Eliminar producto
function eliminar(){
    while (parseInt(decision)===2){
        let productoEliminar = prompt('Escribe el nombre del producto que quieres eliminar (Recuerda ingresar el texto en minuscula)');
        for (const array of listas) {
            let indice = array.indexOf(productoEliminar);
            array.splice(indice,1);
        }
    }
}

listaCompras();