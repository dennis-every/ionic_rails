import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Product[] = [];
  API_URL = 'http://localhost:3000/';
  public loaded = false;

  constructor(public http: HttpClient) { }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

  // index (list)
  public getProducts(path) {
    const endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }

  // show (read)
  public getProduct(path) {
    const endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }



  // create method
  public post(path:string,body:any) {

      var endpoint = this.API_URL + path;
      return this.http.post(endpoint,body);

  }
  // delete method
  public delete(path:string){

    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);

  }
  // update method
  public update(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint,body);
  }

}
