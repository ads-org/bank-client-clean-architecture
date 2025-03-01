import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { GetPaginatedCustomerComponent } from './get-paginated-customer/get-paginated-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [GetPaginatedCustomerComponent, CreateCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
