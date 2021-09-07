var botones = Array.from(document.getElementsByTagName('td'));

movimientoAleatorio = pokemonRival.movimientos[ Math.floor(Math.random() * pokemonRival.movimientos.length) ];

botones.forEach((btn) => {
    btn.addEventListener("click", function() {
        let mostrarMensajeDeAtaque = setTimeout(function() {
            if(pokemonRival.vida > 0 && pokemonJugador.vida > 0) {
                actualizarMensaje(`${pokemonRival.nombre} usó ${movimientoAleatorio.nombre}`);
                let bajarVidaJugador = setTimeout(function() {
                    actualizarMensaje(pokemonRival.atacarEnemigo(pokemonJugador, movimientoAleatorio))
                    actualizarVidaJugador()
                }, 3000);
                let mostrarMensajeDeFinalizado = setTimeout(function() {
                    if(pokemonJugador.vida > 0){
                        actualizarMensaje("Elige tu proximo ataque")
                    }
                }, 6000);
            }else {
                actualizarMensaje(`${pokemonJugador.nombre} ganó`)
            }
            }, 6000);
            
        
        
    });
})
