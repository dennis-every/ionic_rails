import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private customersService: CustomersService,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      first_name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      last_name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }


  onCreate() {
    console.log(this.form);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(this.form);
  }

}
