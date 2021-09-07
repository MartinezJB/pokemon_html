var botones = Array.from(document.getElementsByTagName('td'));

movimientoAleatorio = pokemonRival.movimientos[ Math.floor(Math.random() * pokemonRival.movimientos.length) ];

botones.forEach((btn) => {
    btn.addEventListener("click", function() {
        if(pokemonRival.vida > 0) {
            let mostrarMensajeDeAtaque = setTimeout(function() {
                actualizarMensaje(`${pokemonRival.nombre} usó ${movimientoAleatorio.nombre}`);
            }, 6000);
            let bajarVidaJugador = setTimeout(function() {
                actualizarMensaje(pokemonRival.atacarEnemigo(pokemonJugador, movimientoAleatorio))
                actualizarVidaJugador()
            }, 9000);
            let mostrarMensajeDeFinalizado = setTimeout(function() {
                actualizarMensaje("Elige tu proximo ataque")
            }, 12000);
        }
        
    });
})
