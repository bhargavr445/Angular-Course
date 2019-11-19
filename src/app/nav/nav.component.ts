import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goTo(type: string){
    if(type=='home'){
      this.route.navigate(['/home'])
    } else if(type=="products"){
      this.route.navigate(['/products'])
    } else if(type=="employee"){
      this.route.navigate(['/employee'])
    }
  }

}
