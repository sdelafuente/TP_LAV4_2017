import { Injectable } from '@angular/core';

import {Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServicioAritmeticaService {
    data: any;
    constructor(public http:Http) { }

    public httpGetPromise(){
        return this.http.get("../../assets/json/operaciones.json").map(data => {
            data.json();
            // the console.log(...) line prevents your code from working
            return data.json();
    });
    }

    private extraerDatos(resp:Response) {

        return resp.json() || {};

    }
    private handleError(error:Response | any) {

        return error;
    }

}
