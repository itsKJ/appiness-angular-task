import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})

export class OrderCardComponent implements OnInit {

  @Input('order') order: Order;

  constructor(private router: Router, private orderService  : OrderService) { }

  ngOnInit(): void {
  }

  nextStatus(order) {
    if (order.status < 3)
      order.status++
    this.orderService.saveOrder(order)
  }

  showDetails(order) {
    var extras: NavigationExtras = {
      state: {
        order: order
      }
    }
    this.router.navigate(['/order-details'], extras)
  }

  getTotalCost(order){
    return this.orderService.getTotalCost(order);
  }
}
