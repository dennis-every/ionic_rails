import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  private id: string;
  public product: Product;

  constructor(public productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadProduct();
  }

  loadProduct() {
    this.productsService.getProduct('products/' + this.id).subscribe((data: Product) => {
      this.product = data;
    });
  }

}
