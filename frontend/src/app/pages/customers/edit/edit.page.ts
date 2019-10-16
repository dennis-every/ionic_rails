import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../interfaces/customer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  private id: string;
  public customer: Customer = {} as Customer;
  form: FormGroup;

  constructor(
    private router: Router,
    private customersService: CustomersService,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadCustomer();
    console.log(this.customer);

    this.form = new FormGroup({
      first_name: new FormControl(this.customer.first_name, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      last_name: new FormControl(this.customer.last_name, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(6)]
      })
    });

    console.log('fdsafs');

  }

  loadCustomer() {
    this.customersService.show('customers/' + this.id).subscribe((data: Customer) => {
      this.customer = data;
    });
  }


  onUpdate() {
    this.customersService.update(this.form.value, this.customer.id).subscribe( (resp: Customer) => {
      this.router.navigateByUrl('customers/' + resp.id);
    });
  }


}
