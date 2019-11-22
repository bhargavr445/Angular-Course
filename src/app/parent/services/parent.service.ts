import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { 

  }

  searchPrent(parentInfo: any){
    console.log(parentInfo);
   // localhost://parent/search?parentId=parentInfo.parentId&name=parentInfo.parentName&phone=parentPhone"
  return this.http.get('http://localhost://parent/search?parentId=parentInfo.parentId&name=parentInfo.parentName&phone=parentPhone');
  }
}
