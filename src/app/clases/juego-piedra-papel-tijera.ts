export class JuegoPiedraPapelTijera {
    public nombre = 'Sin Nombre';
    public jugador: string;
    public gano = false;


    numeroRandom: number = 0;
    piedra: number = 1;
    papel: number = 2;
    tijera: number = 3;
    resultado: string;

    constructor(nombre?: string, gano?: boolean,jugador?:string) {
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if(jugador)
            this.jugador=jugador;
        else
            this.jugador= "natalia natalia";
    }

    Comenzar() {
        this.numeroRandom = Math.floor((Math.random() * 3) + 1);
    }

    Piedra() {
        this.Comenzar();

        if ( this.numeroRandom == this.piedra ) {
            this.resultado = "Empato";
            this.gano = false;
        }
        if ( this.numeroRandom == this.papel) {
            this.gano = false;
            this.resultado = "Perdio";
        }
        if (this.numeroRandom == this.tijera) {
            this.gano = true;
            this.resultado = "Gano";
        }
    }

    Papel() {
        this.Comenzar();

        if (this.numeroRandom == this.piedra) {
            this.gano = true;
            this.resultado = "Gano";
        }
        if (this.numeroRandom == this.papel) {
            this.gano = false;
            this.resultado = "Empato";
        }
        if (this.numeroRandom == this.tijera) {
            this.gano = false;
            this.resultado = "Perdio";
        }
    }

    Tijera() {
        this.Comenzar();

        if (this.numeroRandom == this.piedra) {
            this.gano = false;
            this.resultado = "Perdio";
        }
        if (this.numeroRandom == this.papel) {
            this.gano = true;
            this.resultado = "Gano";
        }
        if (this.numeroRandom == this.tijera) {
            this.resultado = "Empato";
        }
    }

    public MostrarResultado() {
        return this.resultado;
    }


    public retornarAyuda() {

      return "NO hay Ayuda definida";
    }
}
