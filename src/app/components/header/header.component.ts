import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModelServer} from "../../models/cart.model";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: Number;
  uiURL:string= environment.uiURL;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
  this.cartService.cartTotal$.subscribe(total => {
    this.cartTotal = total;
  });

  this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  }

}
