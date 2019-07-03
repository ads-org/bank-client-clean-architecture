import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {CustomerService} from '../../../../core/services/customer.service';
import {Customer} from '../../../../core/models/customers/Customer';

@Component({
  selector: 'app-get-paginated-customer',
  templateUrl: './get-paginated-customer.component.html',
  styleUrls: ['./get-paginated-customer.component.css']
})
export class GetPaginatedCustomerComponent implements OnInit, OnChanges {
  customers: Customer[] = [];
  @Input() parentData;
  @Output() childEvent = new EventEmitter();

  constructor(private customerService: CustomerService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getPaginated().subscribe(res => {
      this.customers = res.data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.customers.concat(this.parentData);
  }
}
