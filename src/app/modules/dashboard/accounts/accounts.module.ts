import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { GetAccountsComponent } from './get-accounts/get-accounts.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';

@NgModule({
  declarations: [GetAccountsComponent, CreateAccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
