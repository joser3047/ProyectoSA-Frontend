import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TargetService} from "../../services/target.service";
import {TargetModel} from "../../models/target.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'mg-home',
    templateUrl: './target-register.component.html',
    styleUrls: ['./target-register.component.scss']

})

export class TargetRegisterComponent implements OnInit{

    target: TargetModel = new TargetModel();
    idUser: number=1;
    private url = environment.serverURL;

    ngOnInit(): void {

    }

    constructor(private http: HttpClient) {
        this.target.user = this.idUser;
    }

    onSumbit(){



        console.log(this.target.tipo);
        this.registrarTarjeta();
    }

    registrarTarjeta(){

        const r =this.http.post(this.url+'target', this.target).toPromise();
        //console.log(r)
    }

}

