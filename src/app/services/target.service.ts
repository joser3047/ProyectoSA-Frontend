import {TargetModel} from "../models/target.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class TargetService {
    private url = environment.serverURL;

    constructor(private http: HttpClient) {
    }

    registrarTarjeta(target:TargetModel){
        return this.http.post(this.url+'target',target).toPromise();
    }
}
