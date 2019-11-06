import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  welcomeMessage: string = "I am Welcome Page";
  noOfStudents: number = 2;
  noOfClicks: number=0;

  constructor(private appService: AppService) {

  }

  searchStudent() {
    this.appService.getStudentData();
  }



}
