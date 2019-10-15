import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customers: Customer[] = [];

  constructor(public customersService: CustomersService, public router: Router) { }

  ngOnInit() {
    this.customersService.index('customers').subscribe((data: Customer[] ) => {
      this.customers = data;
    });
  }

}
