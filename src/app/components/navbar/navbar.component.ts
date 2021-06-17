import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/services/basket/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  get quantityCards() {
    return this.serviceBasket.quantityCards;
  }

  get totalPrice() {
    return this.serviceBasket.totalPrice;
  }

  constructor(public router: Router,
    public serviceBasket: BasketService) { }

  ngOnInit(): void {
  }

  goToBasket = () => {
    this.router.navigate(['basket']);
  }

  goToList = () => {
    this.router.navigate(['list']);
  }

}
