import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  resetData() {
    this.fetchOrders().then(data => {
      sessionStorage.setItem("ORDERS",JSON.stringify(data))
    })
  }

  private fetchOrders() {
    console.log("Fetching data");
    return this.http.get('./assets/orders.json').toPromise()
  }

  getOrders(): Promise<any> {
    var orders = JSON.parse(sessionStorage.getItem("ORDERS"))
    if (orders) {
      console.log("Reusing data");
      return Promise.resolve(orders)
    }
    else
      return this.fetchOrders()
  }

  getTotalCost(order: Order) {
    var amount = 0;
    order.pizzas.forEach(pizza => {
      amount += pizza.cost
    });
    order.beverages.forEach(pizza => {
      amount += pizza.cost
    });
    order.burgers.forEach(pizza => {
      amount += pizza.cost
    });

    return amount;
  }

  saveOrder(order: Order) {
    var orders: Order[] = JSON.parse(sessionStorage.getItem("ORDERS"))
    orders.splice(orders.indexOf(orders.find(o => o.id == order.id)), 1)
    orders.unshift(order)
    sessionStorage.setItem("ORDERS", JSON.stringify(orders))
  }

}
