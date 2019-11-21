import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent.component';
import { ParentCreateComponent } from './parent-create/parent-create.component';


const routes: Routes = [
  {path: '', component: ParentComponent, children:[
    {path: 'create', component: ParentCreateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
