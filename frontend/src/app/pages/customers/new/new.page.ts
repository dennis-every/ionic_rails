import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor(
    private router: Router,
    private customersService: CustomersService,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
  }


  onCreate() {
    console.log('Created!');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const fname = form.value.fname;
    // const lname = form.value.lname;
    console.log(fname);
  }

}
