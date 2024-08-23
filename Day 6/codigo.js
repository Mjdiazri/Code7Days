let decision= prompt('Bienvenid@. Por favor ingresa 1️⃣  para agregar un producto nuevo o 2️⃣ para eliminar productos');
const fruit=['manzana', 'cacao', 'tamarindo'];
const candy=['cereal'];
const dairy=['queso', 'leche'];
const meat =['carne', 'jamon'];
const listas = [fruit, candy, dairy, meat];

function listaCompras(){
    while (parseInt(decision)===1){
        agregar();
        decision = prompt ('Por favor ingresa 1️⃣  para agregar un producto nuevo o 2️⃣ para eliminar productos');
    } 

    while(parseInt(decision)===2){
        eliminar();
        decision = prompt ('Por favor ingresa 1️⃣  para agregar un producto nuevo o 2️⃣ para eliminar productos');
    }
    
    alert('❌Opcion no valida ❌')
    decision = prompt ('Por favor ingresa 1️⃣  para agregar un producto nuevo o 2️⃣ para eliminar productos');
}

//Funcion eliminar productos
function eliminar(){
    alert(`Esta es tu lista de compras:\nFrutas🍉: ${fruit.join()}\nLacteos🥛: ${dairy.join()}\n Dulces🍩: ${candy.join()}\n Carnes🍖: ${meat.join()}`);
    let productoEliminar = prompt('Escribe el nombre del producto que quieres eliminar');
    let encontrado = false;
    for (const array of listas) {
        if (array.includes(productoEliminar)){
            console.log(array.includes(productoEliminar));
            array.splice(array.indexOf(productoEliminar),1);
            alert('Producto eliminado ✔');
            console.log(`Esta es tu lista de compras:\nFrutas: ${fruit.join()}\nLacteos: ${dairy.join()}\n Dulces: ${candy.join()}\n Carnes: ${meat.join()}`)
            encontrado = true;
            break;
        }         
    }
    if (encontrado === false){
        alert('❌Producto no encontrado❌');
    }
}

//Funcion agregar productos
function agregar(){
    let  nuevoProducto = prompt('Escribe el nombre del producto que quieras agregar en minuscula');
    let categoria = prompt ('A que categoria quieres agregar el producto: fruit🍉, candy🍩, dairy🥛, meat🍖');
    switch (categoria){
        case "fruit":
            if(fruit.indexOf(nuevoProducto)=== -1){
                fruit.push(nuevoProducto);
                alert('Producto agregado ✔');
            } else if (fruit.indexOf(nuevoProducto)>1){
                alert(`❌El producto ${nuevoProducto} ya existe en la categoria`)
            }
                break;

        case "candy":
            if(candy.indexOf(nuevoProducto)=== -1){
                candy.push(nuevoProducto);
                alert('Producto agregado ✔');
            } else if (candy.indexOf(nuevoProducto)>1){
                alert(`❌El producto ${nuevoProducto} ya existe en la categoria`)
            }
                break;

        case "dairy":
            if(dairy.indexOf(nuevoProducto)=== -1){
                dairy.push(nuevoProducto);
                alert('Producto agregado ✔');
            } else if (dairy.indexOf(nuevoProducto)>1){
                alert(`❌El producto ${nuevoProducto} ya existe en la categoria`)
            }
                break;

        case "meat":
            if(meat.indexOf(nuevoProducto)=== -1){
                meat.push(nuevoProducto);
                alert('Producto agregado ✔');
            } else if (meat.indexOf(nuevoProducto)>1){
                alert(`❌El producto ${nuevoProducto} ya existe en la categoria`)
            }
                break;  
    }
}

listaCompras();