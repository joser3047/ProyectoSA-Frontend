import {TargetModel} from "../models/target.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

export class TargetService {
    private url = environment.serverURL;

    constructor(private http: HttpClient) {
    }

    registrarTarjeta(target:TargetModel, idUser:number){
        //return this.http.post(this.url+'target',JSON.stringify(target)).toPromise();
    }
}
