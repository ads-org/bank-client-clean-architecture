import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccountsComponent} from './create-accounts/create-accounts.component';
import {GetAccountsComponent} from './get-accounts/get-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountsComponent
  },
  {
    path: 'get',
    component: GetAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
