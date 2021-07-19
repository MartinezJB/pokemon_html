const GarraAfilada = {
    nombre : "GARRA AFILADA",
    tipo: Normal,
    usos : 25,
    danio: 30,
    danioPara(enemigo) {
        if(enemigo.tipo.esDebilContra(this.tipo)){
            return this.danio * 1.15;
        }else if(enemigo.tipo.esFuerteContra(this.tipo)){
            return this.danio * 0.60;
        }else{
            return this.danio;
        }
    }
}

const LanzaLlamas = {
    nombre : "LANZA LLAMAS",
    usos : 10,
    danio: 60,
    danioPara(enemigo) {
        if(enemigo.tipo.esDebilContra(this.tipo)){
            return this.danio * 1.15;
        }else if(enemigo.tipo.esFuerteContra(this.tipo)){
            return this.danio * 0.60;
        }else{
            return this.danio;
        }
    }
}

const Arañazo = {
    nombre : "ARAÑAZO",
    usos : 30,
    danio: 20,
    danioPara(enemigo) {
        if(enemigo.tipo.esDebilContra(this.tipo)){
            return this.danio * 1.15;
        }else if(enemigo.tipo.esFuerteContra(this.tipo)){
            return this.danio * 0.60;
        }else{
            return this.danio;
        }
    }
}

const Vuelo = {
    nombre : "VUELO",
    usos : 15,
    danio: 35,
    danioPara(enemigo) {
        if(enemigo.tipo.esDebilContra(this.tipo)){
            return this.danio * 1.15;
        }else if(enemigo.tipo.esFuerteContra(this.tipo)){
            return this.danio * 0.60;
        }else{
            return this.danio;
        }
    }
}