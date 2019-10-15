import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor(
    private router: Router,
    private productsService: ProductsService,
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
    const name = form.value.name;
    console.log(name);
  }

}
