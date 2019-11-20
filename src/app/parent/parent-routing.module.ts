import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentFilterComponent } from '../parent/parent-filter/parent-filter.component';


const routes: Routes = [
  {path: '', component: ParentFilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
