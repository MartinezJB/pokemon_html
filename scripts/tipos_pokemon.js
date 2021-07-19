const Fuego = {
    esDebilContra(tipo) {
        return tipo == this.debilidad;
    },
    esFuerteContra(tipo) {
        return tipo == this.fuerte;
    }
};
const Agua = {
    esDebilContra(tipo) {
        return tipo == this.debilidad;
    },
    esFuerteContra(tipo) {
        return tipo == this.fuerte;
    }
};
const Planta = {
    esDebilContra(tipo) {
        return tipo == this.debilidad;
    },
    esFuerteContra(tipo) {
        return tipo == this.fuerte;
    }
};
const Normal = {
    esDebilContra(tipo) {
        return tipo == this.debilidad;
    },
    esFuerteContra(tipo) {
        return tipo == this.fuerte;
    }
};
const Lucha = {
    esDebilContra(tipo) {
        return tipo == this.debilidad;
    },
    esFuerteContra(tipo) {
        return tipo == this.fuerte;
    }
};

Fuego.debilidad = Agua;
Fuego.fuerte = Planta;
Agua.debilidad = Planta;
Agua.fuerte = Fuego;
Planta.debilidad = Fuego;
Planta.fuerte = Agua;
Normal.debilidad = Lucha;
Normal.fuerte = Lucha;

function esDebilContra(tipo) {
    return tipo == this.debilidad;
}