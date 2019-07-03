import {Customer} from '../customers/Customer';

export class BankAccount {
  id: number;
  number: string;
  balance: number;
  isLocked: boolean;
  customer: Customer;
}
