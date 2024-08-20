let decision= prompt('Bienvenido a tu lista de compras.Quieres ingresar un nuevo producto a tu lista? (contesta "si" o "no")');
const fruit=[];
const candy=[];
const dairy=[];
const meat =[];

while (decision === 'si'){
    let  nuevoProducto = prompt('Escribe el nombre del producto que quieras agregar');
    let categoria = prompt ('A que categoria quieres agregar el producto');
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
  decision = prompt('Quieres ingresar un nuevo producto a tu lista? (contesta "si" o "no")');
  if (decision === "no") {
    alert(`Esta es tu lista de compras:\n  Frutas: ${fruit.join()},\n Lacteos: ${dairy.join()},\n Dulces: ${candy.join()},\n Carnes:${meat.join()}`);
  }

}



