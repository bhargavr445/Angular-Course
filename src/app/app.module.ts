import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    ProductsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
