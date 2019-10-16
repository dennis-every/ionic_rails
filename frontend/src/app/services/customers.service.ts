import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../interfaces/customer';
import {tap, map, catchError} from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  public customers: Customer[] = [];
  API_URL = environment.API_URL;
  actionPath = 'customers';
  public loaded = false;

  constructor(public http: HttpClient) { }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

  // index (list)
  public index(path) {
    const endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }

  // show (read)
  public show(path) {
    const endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }

  // create method
  public create(customer: Customer) {
      const endpoint = this.API_URL + this.actionPath;
      return this.http.post(endpoint, customer).pipe(
        catchError(error => {
          console.log(error.message);
          throw new Error(error);
        })
      );
  }

  // delete method
  public delete(id: number) {
    const endpoint = this.API_URL + this.actionPath + '/' + id;
    return this.http.delete(endpoint).pipe(
      catchError(error => {
        console.log(error.message);
        throw new Error(error);
      })
    );
  }

  // update method
  public update(customer: Customer, id: number) {
    const endpoint = this.API_URL + this.actionPath + '/' + id;
    return this.http.put(endpoint, customer).pipe(
      catchError(error => {
        console.log(error.message);
        throw new Error(error);
      })
    );
  }

}
