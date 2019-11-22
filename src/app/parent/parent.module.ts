import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentFilterComponent } from '../parent/parent-filter/parent-filter.component';
import { ParentResultComponent } from '../parent/parent-result/parent-result.component';
import { ParentComponent } from './parent.component';
import { ParentCreateComponent } from './parent-create/parent-create.component';
import { SharedModule } from '../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentFilterComponent,
    ParentResultComponent,
    ParentComponent,
    ParentCreateComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    

  ]
})
export class ParentModule { }
