// aca arranca mi simulador 

let nombre = prompt ("ingrese su nombre");
let edad = prompt ("¿cual es tu edad?")
alert ("Bienvenido a Eventos OBrien");
function pedirnombre() {
   
    let nombre = prompt ("ingrese su nombre");


    let edad = parseInt (prompt("¿cual es tu edad?"));

   


}


class fiesta{
    constructor( tematica,cantidad_personas,lugar,musica,barra){
        this.tematica = tematica;
        this.cantidad_personas = cantidad_personas;
        this.lugar = lugar;
        this.musica = musica;
        this.barra = barra;
        this.evento = false;
    }
    CrearEvento(){
        if(this.evento == false){
            alert("el evento se pude crear")
            this.evento = true
        } else{
            alert("el evento no se puede crear")
            this.evento = false
        }
    }
    Dj(){
        if (this.evento == true){
            alert("con Dj")
        } else{
            alert("sin Dj")
        }
    }
    Seguridad(){
        alert(`el evento incuye personal de seguridad `)
    }
}
    fiesta1 = new fiesta("año 90's","100","salon","musica90's","alcohol");
    fiesta1.CrearEvento();
    fiesta1.Dj();
    fiesta1.Seguridad();

let boton = document.getElementById("boton");
    boton.addEventListener("click",validar);

function validar() {
    let campo_email = document.getElementById("email").value;
    if (campo_email == "") {
        alert("¡falta completar el email!");
    }

}