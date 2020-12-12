import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";



@Component({
    selector: 'mg-home',
    templateUrl: './client-profile.component.html',
    styleUrls: ['./client-profile.component.scss']
})

export class ClientProfileComponent implements OnInit{

    idUser: number=1; //cambiar por variable de sesion
    user;

    constructor(private userService:UserService) {
    }

    ngOnInit(): void {
       const getUserPromise= this.userService.getSingleUser(1);
       getUserPromise.then(value => {
           console.log(value);

           this.user = value.user;
       })
    }



}


