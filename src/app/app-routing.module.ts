import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch:'full'
  },

  {
    path: 'orders',
    component: OrdersComponent
  },

  {
    path: "order-details",
    component: OrderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
