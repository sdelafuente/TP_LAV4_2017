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
   @Output()
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
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

  ngOnInit() {

      this.CargarDatos();

  }

   constructor(public servicio: ServicioAritmeticaService) {
     this.ocultarVerificar=true;
     this.Tiempo=5;
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");

  }

  CargarDatos()
  {
      this.servicio.httpGetPromise().subscribe(
        data => {

          this.arrOperaciones = data.operaciones;
          //console.log( this.arrOperaciones[2]);
        }
    );
  }
  NuevoJuego() {

      this.numeroIndice = Math.floor((Math.random() * 7) + 1);

      this.ocultarVerificar=false;

      this.num_1 = this.arrOperaciones[this.numeroIndice].numero1;
      this.num_2 = this.arrOperaciones[this.numeroIndice].numero2;
      this.num_op = this.arrOperaciones[this.numeroIndice].op;
      this.num_respuesta = this.arrOperaciones[this.numeroIndice].respuesta;

      this.repetidor = setInterval(()=>{
          this.Tiempo--;
          console.log("llego", this.Tiempo);
          if(this.Tiempo==0 ) {
              clearInterval(this.repetidor);
              this.verificar();
              this.ocultarVerificar=true;
              this.Tiempo=5;
          }
      }, 900);

  }

  verificar()
  {

    this.ocultarVerificar=false;
    if(this.respuestaUsuario == this.num_respuesta)
        this.nuevoJuego.gano = true;
    else
        this.nuevoJuego.gano = false;

    clearInterval(this.repetidor);

  }


}
