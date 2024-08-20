alert('Adivina el numero secreto');
let numeroSecreto= Math.floor( Math.random() * 10 + 1 );
let vidas=3;

function secreto(){
    while ( vidas >= 1){
        numeroUsuario = Number(prompt ('escribe un numero del 1 al 10')) 
        if (vidas > 1) {
            if (numeroUsuario != numeroSecreto) {
                alert ('No es el numero, intenta de nuevo');
                vidas = vidas - 1;                
            } else if (numeroUsuario === numeroSecreto) {
                alert (`Ganaste, el numero era ${numeroSecreto}`)
                break;
            }
        } else if (vidas===1 ) {
            alert (`Perdiste, el numero era ${numeroSecreto}`);
            break; 
        }        
    } 
}
secreto();