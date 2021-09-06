const movimientosCharizard = [GarraAfilada, LanzaLlamas, Arañazo, Vuelo];

const pokemonJugador = new Charizard(movimientosCharizard);
const pokemonRival = new Sceptile();



function actualizarEscenario(){
    actualizarJugador();
    prepararVidas();
}
function actualizarJugador(){
    for(let i=0; i < pokemonJugador.movimientos.length; i++){
        document.getElementById("ATAQUE" + (i+1)).innerHTML = pokemonJugador.movimientos[i].nombre;
        document.getElementById("ATAQUE" + (i+1)).addEventListener("click",function() 
            {                
                actualizarMensaje(pokemonJugador.atacarEnemigo(pokemonRival, pokemonJugador.movimientos[i]))
                actualizarVidaRival();
            })
    }
}
function prepararVidas() {
    let vidaJugadorGrafica = document.getElementById("barraVida");
    let vidaJugadorActual = document.getElementById("vidaActual");
    let vidaJugadorMaxima = document.getElementById("vidaMaxima");

    vidaJugadorMaxima.innerHTML = pokemonJugador.vida;
    vidaJugadorActual.innerHTML = pokemonJugador.vida;
    vidaJugadorGrafica.max = parseInt(vidaJugadorMaxima.innerHTML);
    vidaJugadorGrafica.value = parseInt(vidaJugadorActual.innerHTML);
    document.getElementById("nombrePokeJugador").innerHTML = pokemonJugador.nombre;
    document.getElementById("nombrePokeRival").innerHTML = pokemonRival.nombre;
    document.getElementById("vidaRival").max = pokemonRival.vida;
    document.getElementById("vidaRival").value = pokemonRival.vida;
    

}
function actualizarVidaRival() {
    document.getElementById("vidaRival").value = pokemonRival.vida;
    animateprogress("vidaRival", pokemonRival.vida)
}

function actualizarVidaJugador() {
    document.getElementById("barraVida").value = pokemonJugador.vida
}

function actualizarMensaje(mensaje) {
    document.getElementById("texto").innerHTML = mensaje;
}
document.getElementsByTagName("body")[0].addEventListener("load", actualizarEscenario())

window.addEventListener("load", alert('¡ESTA APP ESTÁ EN CONSTRUCCIÓN!\nSe recomienda usar la resolución a partir de 1050px por 540px para una mejor experiencia'))