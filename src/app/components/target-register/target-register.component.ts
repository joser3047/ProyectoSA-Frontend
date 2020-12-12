import {Component, OnInit} from '@angular/core';
import {TargetService} from "../../services/target.service";
import {TargetModel} from "../../models/target.model";
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

    constructor(private targetService: TargetService) {


    }

    onSumbit(){

        //supongo que por aca iria la variable de sesion
        this.target.user = this.idUser;
        this.targetService.registrarTarjeta(this.target);
        location.reload();


    }


}

