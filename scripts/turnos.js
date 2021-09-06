var esTurnoDelJugador = true;

var botones = Array.from(document.getElementsByTagName('td'));
botones.forEach((btn) => {
    btn.addEventListener("click", function() { cambiarTurno() });
})

function cambiarTurno () { esTurnoDelJugador = !esTurnoDelJugador }
