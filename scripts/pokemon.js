class Pokemon {
    constructor(_nombre, _tipo, _vida, _puntosDeDanio, _puntosDeDefensa, _movimientos){
        this.nombre = _nombre;
        this.tipo = _tipo;
        this.vida = _vida;
        this.puntosDeDanio = _puntosDeDanio;
        this.puntosDeDefensa = _puntosDeDefensa;
        this.movimientos = _movimientos;
    }

    atacarEnemigo(enemigo, ataque){
        if(ataque.usos > 0){
            ataque.usos -= 1;
            return enemigo.sufrirDanio(ataque);
        }else{
            return "No quedan pp para este movimiento";
        }
    }

    sufrirDanio(ataque){
        if(ataque.danioPara(this) >= this.vida){
            this.vida = 0;
            return this.nombre + " está fuera de combate."
        }
        else{
            this.vida -= ataque.danioPara(this);
            return this.nombre + " ha sufrido " + ataque.danioPara(this) + " puntos de daño."
        }
    }
}



class Charizard extends Pokemon {
    constructor(_movimientos = [], _nombre = "Charizard"){
        super(_nombre, Fuego, 160, 60, 45, _movimientos);
    }
}

class Sceptile extends Pokemon {
    constructor(_movimientos = [], _nombre = "Sceptile"){
        super(_nombre, Planta, 160, 60, 45, _movimientos);
    }
}