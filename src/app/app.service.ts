import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { HttpBackendClientService } from './interceptors/http-backend-client.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private httpb: HttpBackendClientService) { }

  // private http: HttpClient;

  //   constructor(
  //       handler: HttpBackend) {
  //       this.http = new HttpClient(handler);
  //   }

  // constructor(private http: HttpBackendClientService) {
  // }

  getAllProducts() {
   return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
   //  'http://localhost:8080/findAll');
  }

  getProductById(productId: any){
   return this.http.get(`${"http://localhost:8080/getById"}/${productId}`);
   
  }

  createProduct() {
    let product = {
      "id": "10", 
      "name": "MAC"
    };
    this.http.post('SOME URL', product)
  }

}

// get - to get record(fetch)
// post - create
// put - update
// delete - delete
