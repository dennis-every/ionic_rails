import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: Product[] = [];

  constructor(public productsService: ProductsService, public router: Router) { }

  ngOnInit() {
    this.productsService.getProducts('products').subscribe((data: Product[] ) => {
      this.products = data;
    });
  }

}
