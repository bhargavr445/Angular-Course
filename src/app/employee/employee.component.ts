import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  ngOnDestroy() {
    console.log("emp des")
 }

  
  ngOnInit() {
    console.log("Emp init")
  }

  constructor() {
    console.log("Emp Con")
   }

  
  

}
