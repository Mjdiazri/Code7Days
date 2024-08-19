
function eleccion (){

    let area = prompt('Indica 1 si quieres seguir hacia el area Front-end y 2 si quieres seguir por el area Back-end');
    if(parseInt(area) === 1){
        let subarea = prompt('Ahora selecione 1 si quiere aprender React o 2 si quiere aprender Vue')
        if (parseInt(subarea) === 1 || parseInt(subarea)===2){
        eleccion2()
        } else {
            alert('Opcion no valida. Reinicia la pagina')
        }
    } else if (parseInt(area)===2){
        let subares = prompt('Ahora selecione 1 si quiere aprender C# o 2 si quiere aprender Java')
        if (parseInt(subares) === 1 || parseInt(subares)===2){
            eleccion2()
            } else {
                alert('Opcion no valida. Reinicia la pagina')
            }
    } else {
        alert('Opcion no encontrada reinicia la pagina')
    }


function eleccion2(){
        let terarea = prompt('Indique 1 si quiere seguir especializandose en el area escogida o 2 si prefiere convertirse en un desarrollador fullstack')
        if(parseInt(terarea)===1){
            alert('Especializarse en una opcion es un buen camino!')
            eleccion3();
        } else if (parseInt(terarea)===2){
            alert('Aprender tanto de front como de back te abrira muchas puertas')
            eleccion3();
        } else {
            alert('Opcion no encontrada')
        }
    }


function eleccion3(){
    let tematica = prompt('Finamente indicanos algunas tecnologias que te gustaria aprender, te parece? (escribe "ok" si estas de acuerdo)')
        
    while(tematica === "ok"){
        let tematica = prompt('Escribe el nombre de esta tecnologia o herramienta');
        let decision = prompt('¿Hay alguna otra tecnología que te gustaría aprender?')
        if(decision != "ok"){
            break;
        }

    }
    alert('Recuerda estudiar en freecodecamp para profundizar estos conocimientos')
} 

}

eleccion();