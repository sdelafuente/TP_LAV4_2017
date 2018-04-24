import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

import { ServicioAritmeticaService } from '../../servicios/servicio-aritmetica.service';


@Component({
    selector: 'app-agilidad-aritmetica',
    templateUrl: './agilidad-aritmetica.component.html',
    styleUrls: ['./agilidad-aritmetica.component.css']
})


export class AgilidadAritmeticaComponent implements OnInit {

    @Output() enviarJuego :EventEmitter<any>= new EventEmitter<any>();

    nuevoJuego : JuegoAgilidad;
    ocultarVerificar: boolean;
    Tiempo: number;
    repetidor:any;

    private subscription: Subscription;

    public numeroIndice :number;
    public arrOperaciones : Array<any>;
    public num_1 : number;
    public num_2 : number;
    public num_op : string;
    public num_respuesta : number;
    public respuestaUsuario : number;

    //Inicio
    ngOnInit() {

        this.CargarDatos();

    }

    constructor(public servicio: ServicioAritmeticaService) {
        //console.info("Inicio agilidad");
        this.ocultarVerificar=true;
        this.Tiempo = 15;
        this.nuevoJuego = new JuegoAgilidad();

    }

    CargarDatos()
    {
        this.servicio.httpGetPromise().subscribe(
            data => {
                this.arrOperaciones = data.operaciones;
                //console.log( this.arrOperaciones[2]);
        });
    }

    /*
        Creo un nuevo Juego
    */
    NuevoJuego() {

        //Genero un indice Random para usar en el array de operaciones
        this.numeroIndice = Math.floor((Math.random() * 7) + 1);
        //Ajusto el tiempo que quiero
        this.Tiempo = 15;

        //Oculto el Nuevo
        this.ocultarVerificar=false;

        //Cargo los datos
        this.num_1 = this.arrOperaciones[this.numeroIndice].numero1;
        this.num_2 = this.arrOperaciones[this.numeroIndice].numero2;
        this.num_op = this.arrOperaciones[this.numeroIndice].op;
        this.num_respuesta = this.arrOperaciones[this.numeroIndice].respuesta;

        //Seteo
        this.repetidor = setInterval(() =>{
            this.Tiempo--;
            //console.log("llego", this.Tiempo);
            if(this.Tiempo == 0 ) {
                clearInterval(this.repetidor);
                this.verificar(0);
                this.ocultarVerificar=true;
            }
        }, 1200);
    }

    //Verifico que el juego haya sido exitoso
    verificar(param : number)
    {
        //Oculto
        this.ocultarVerificar=true;

        //Si es OK. Gano
        if(this.respuestaUsuario == this.num_respuesta){
            this.nuevoJuego.gano = true;
        } else {
            this.nuevoJuego.gano = false;
        }

        //Lo paso por parametro. Corto
        if(param) {
            clearInterval(this.repetidor);
        }
    }

}
