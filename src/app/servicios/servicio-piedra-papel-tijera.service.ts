import { Injectable } from '@angular/core';

import {Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Juego } from '../clases/juego';

@Injectable()
export class ServicioPiedraPapelTijeraService {
    data: any;
    miArray: Array<Juego>;
    unUsuario: string;

    constructor(public http:Http) {
        this.miArray = new Array<Juego>();
    }

    public httpGetPromise(){
        return this.http.get("../../assets/json/elementos.json").map(data => {
            data.json();
            return data.json();
    });

    }

    private extraerDatos(resp:Response) {

        return resp.json() || {};

    }
    private handleError(error:Response | any) {

        return error;
    }

    public inicializarLista(): Array<Juego> {
        return this.miArray;
    }

    public cargarLista(array: Array<Juego>) {
        this.miArray.concat(array);
    }

    public cargarUsuario(nombreUsuario: string) {
        this.unUsuario = nombreUsuario;
    }

    public retornarUsuario() {
        return this.unUsuario;
    }

}
