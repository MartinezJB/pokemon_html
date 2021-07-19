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
// faltaria crear una cartel en el html para mostrar los mensajes que devuelve la funcion "atacarEnemigo()"