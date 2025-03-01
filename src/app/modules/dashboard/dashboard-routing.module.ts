import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountsModule'
  },
  {
    path: 'bank-transfer',
    loadChildren: './bank-transfer/bank-transfer.module#BankTransferModule'
  },
  {
    path: 'customer',
    loadChildren: './customer/customer.module#CustomerModule'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
