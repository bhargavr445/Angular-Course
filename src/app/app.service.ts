import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
   return this.http.get('http://localhost:8080/findAll');
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
