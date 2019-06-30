import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {GetPaginatedCustomerComponent} from './get-paginated-customer/get-paginated-customer.component';


const routes: Routes = [
  {
    path: '',
    component: CreateCustomerComponent
  },
  {
    path: 'get',
    component: GetPaginatedCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
