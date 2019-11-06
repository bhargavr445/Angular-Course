import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { puts } from 'util';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getStudentData(){
   this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
}

// get - to get record(fetch)
// post - create
// put - update
// delete - delete
