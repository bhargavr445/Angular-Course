import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  resultList = new BehaviorSubject<any>(null);
  cast = this.resultList.asObservable();


  constructor() { }

   getResultList(list: any) {
     //console.log(list.hits);
    this.resultList.next(list.hits);
   }
}











// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private filterText = new BehaviorSubject<any>(null);
//   cast = this.filterText.asObservable();

//   constructor() { }

//   updatedFilterText(filterKey){
//     this.filterText.next(filterKey);
//   }
// }