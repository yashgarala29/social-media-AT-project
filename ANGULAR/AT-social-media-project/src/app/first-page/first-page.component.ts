import { Component, OnInit } from '@angular/core';
import {commonService} from '../common.service';
@Component({
  selector: '.app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  userpost:any=[]
  constructor(private common: commonService) { 
    common.getuser_posts();
  }
  ngOnInit(): void {
    this.common.getuser_posts().subscribe((data) => {
      this.userpost = data;
     }) 
    // console.log(this.common.getuser_details())
    // this.userpost.reverse();

    // console.log(this.userpost);
  }
  getposts()
  {
    

  }

}
