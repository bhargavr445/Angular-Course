import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParentService } from '../../parent/services/parent.service';
import { CommunicationService } from '../../parent/communication.service';

@Component({
  selector: 'app-parent-filter',
  templateUrl: './parent-filter.component.html',
  styleUrls: ['./parent-filter.component.scss']
})
export class ParentFilterComponent implements OnInit {

  parentSearchForm: FormGroup;
  parentList: any;
  constructor(private fb: FormBuilder, 
              private parentService: ParentService, 
              private communicationService: CommunicationService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.parentSearchForm = this.fb.group({
      parentId:[''],
      parentName: [''],
      phoneNumber: ['']
    })
  }


  // 1. @Input
  //    @Output  --xx
  // ================
  // 2. BehaviouralSubject(through Services) --
  // 3. routing -- x

  searchParent() {
    this.parentService.searchPrent(this.parentSearchForm.getRawValue()).subscribe((data)=>{
      this.parentList = data;
                        // [
                        //   {id:1, name:'John'},
                        //   {id:2, name:'Smith'}
                        // ];
                        this.communicationService.getResultList(this.parentList);

    });
  }

  resetForm(){
    this.parentSearchForm.reset();
  }



}
