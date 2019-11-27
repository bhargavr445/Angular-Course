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
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BasechartComponent } from './basechart/basechart.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    ProductsComponent,
    NavComponent,
    BarchartComponent,
    DoughnutchartComponent,
    PiechartComponent,
    BasechartComponent
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
