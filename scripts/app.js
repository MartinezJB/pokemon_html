const movimientosCharizard = [GarraAfilada, LanzaLlamas, Arañazo, Vuelo];

const pokemonJugador = new Charizard(movimientosCharizard);
const pokemonRival = new Sceptile();

function actualizarEscenario(){
    actualizarJugador();
}
function actualizarJugador(){
    for(i=0; i < pokemonJugador.movimientos.length; i++){
        document.getElementById("ATAQUE" + (i+1)).innerHTML = pokemonJugador.movimientos[i].nombre;
    }
}

document.getElementById("ATAQUE1").addEventListener("click", function() {pokemonJugador.atacarEnemigo(pokemonRival, pokemonJugador.movimientos[0])});
document.getElementById("ATAQUE2").addEventListener("click", function() {pokemonJugador.atacarEnemigo(pokemonRival, pokemonJugador.movimientos[1])});
document.getElementById("ATAQUE3").addEventListener("click", function() {pokemonJugador.atacarEnemigo(pokemonRival, pokemonJugador.movimientos[2])});
document.getElementById("ATAQUE4").addEventListener("click", function() {pokemonJugador.atacarEnemigo(pokemonRival, pokemonJugador.movimientos[3])});
// faltaria crear una cartel en el html para mostrar los mensajes que devuelve la funcion "atacarEnemigo()"