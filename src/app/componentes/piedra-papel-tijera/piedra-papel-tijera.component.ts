import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

import { ServicioPiedraPapelTijeraService } from '../../servicios/servicio-piedra-papel-tijera.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

    @Output() enviarJuego :EventEmitter<any>= new EventEmitter<any>();

    nuevoJuego : JuegoPiedraPapelTijera;
    public arrayElementos: Array<any>;

    constructor(private miServicio?: ServicioPiedraPapelTijeraService)
    {
        this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera", true, "Santiago");
    }


    ngOnInit() {
        //this.CargarDatos();
    }

    Piedra()
    {
        this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera", true, "Santiago");
        this.nuevoJuego.Piedra();
        this.nuevoJuego.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.nuevoJuego);
    }

    Papel()
    {
        this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera", true, "Santiago");
        this.nuevoJuego.Papel();
        this.nuevoJuego.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.nuevoJuego);
    }

    Tijera()
    {
        this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera", true, "Santiago");
        this.nuevoJuego.Tijera();
        this.nuevoJuego.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.nuevoJuego);
    }

}
