import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orderService: OrderService) {
    this.activatedRoute.queryParams.subscribe(() => {

      if (this.router.getCurrentNavigation().extras.state)
        this.order = this.router.getCurrentNavigation().extras.state.order
      else
        this.goToOrders();

    })
  }

  ngOnInit(): void {
  }

  goToOrders() {
    this.router.navigateByUrl('/orders')
  }

  getTotal(order) {
    return this.orderService.getTotalCost(order)
  }

}
