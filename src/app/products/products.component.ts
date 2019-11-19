import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsList: any;
  productId: any;
  product: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  getAllProducts() {

    this.appService.getAllProducts().subscribe(data => {
      this.productsList=data;
    });
  }

  getProductById(){
      this.appService.getProductById(this.productId).subscribe(data => {
        this.product = data;
      })
  }
}
