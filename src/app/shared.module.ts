import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { interceptorModules } from './interceptors/interceptorModule';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers:[
    interceptorModules
  ]
})
export class SharedModule { }
