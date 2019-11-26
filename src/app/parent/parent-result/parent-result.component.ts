import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../..//parent/communication.service';

@Component({
  selector: 'app-parent-result',
  templateUrl: './parent-result.component.html',
  styleUrls: ['./parent-result.component.scss']
})
export class ParentResultComponent implements OnInit {

  parentList: any;
  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.cast.subscribe(data =>{
      this.parentList = data;
      console.log(this.parentList);
    })
  }

}
