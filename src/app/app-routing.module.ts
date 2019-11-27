import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BasechartComponent } from './basechart/basechart.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent },
  {path:'piechart', component: PiechartComponent},
  {path:'doughnutchart', component:DoughnutchartComponent},
  {path:'basechart', component:BasechartComponent},
  {path:'barchart', component: BarchartComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'parent', loadChildren: './parent/parent.module#ParentModule'},
  {path: 'about', loadChildren: './about/about.module#AboutModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
