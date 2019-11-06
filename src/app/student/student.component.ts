import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent  {

  newMessage: string = 'Student COmponent';

  constructor() { }

  updateStudent(){
    this.newMessage = 'Student COmponent Button clicked';
  }

}
