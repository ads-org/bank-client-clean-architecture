import {Component, OnInit} from '@angular/core';
import {AccountsService} from '../../../../core/services/accounts.service';
import {BankAccount} from '../../../../core/models/accounts/BankAccount';


@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent implements OnInit {
  customerId: number;
  bankAccount: BankAccount;

  constructor(private accountService: AccountsService) {
  }

  ngOnInit() {
  }

  create() {
    this.accountService.createAccount(this.customerId, this.bankAccount).subscribe(res => {
      // TODO: Handle Create account method
    });
  }
}
