import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders;

  constructor(private orderService : OrderService) { 
    this.orderService.getOrders().then(data => {
      sessionStorage.setItem("ORDERS", JSON.stringify(data))
      this.orders = data;
    })

  }

  ngOnInit(): void {
  }

}
