import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentFilterComponent } from '../parent/parent-filter/parent-filter.component';
import { ParentResultComponent } from '../parent/parent-result/parent-result.component';


@NgModule({
  declarations: [
    ParentFilterComponent,
    ParentResultComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
