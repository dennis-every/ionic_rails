import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../interfaces/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  private id: string;
  public customer: Customer;

  constructor(public customersService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadCustomer();
  }

  loadCustomer() {
    this.customersService.show('customers/' + this.id).subscribe((data: Customer) => {
      this.customer = data;
    });
  }

}
