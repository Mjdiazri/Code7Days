let nombre = "";
let edad = 0 ;
let language ="";
let respuesta = 0;

const click = document.getElementById('boton');
click.addEventListener('click',answer)

function answer(){
    if (nombre == ''){
        nombre = document.getElementById('texto').value;
        document.getElementById('parrafo').innerText = "¿Cuántos años tienes?";
        document.getElementById('texto').value = "";
    } else if (edad <= 0){
        edad = document.getElementById('texto').value;
        document.getElementById('parrafo').innerText = "¿Qué lenguaje de programación estás estudiando?";
        document.getElementById('texto').value = "";
    } else if (language == ''){
        language = document.getElementById('texto').value;
        document.getElementById('texto').value = "";
        document.getElementById('parrafo').innerText = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${language}! ¿Te gusta estudiar ${language}? Responde con el número 1 para SÍ o 2 para NO.`;
        
    } 
}

const clack = document.getElementById('boton');
clack.addEventListener('click',secondpart)

function secondpart(){
    respuesta = document.getElementById('texto').value;
        console.log(respuesta)
        if (respuesta == 1){
            document.getElementById('parrafo').innerText = '¡Muy bien! Sigue estudiando y tendrás mucho éxito.'
        } else if (respuesta == 2){
            document.getElementById('parrafo').innerText = 'Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?'
        }

    }

