import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../interfaces/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  private id: string;
  public customer: Customer;

  constructor(
    public customersService: CustomersService,
    private route: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadCustomer();
  }

  loadCustomer() {
    this.customersService.show('customers/' + this.id).subscribe((data: Customer) => {
      this.customer = data;
    });
  }

  onDelete() {
    this.customersService.delete(this.customer.id).subscribe(() => {
      this.router.navigateByUrl('/customers');
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Do you want to delete?',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.onDelete();
          }
        }
      ]
    });
    await alert.present();
  }

}
