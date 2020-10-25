import { Component, OnInit } from '@angular/core';
import { commonService } from '../common.service';

@Component({
  selector: 'app-post-photos',
  templateUrl: './post-photos.component.html',
  styleUrls: ['./post-photos.component.css']
})
export class PostPhotosComponent implements OnInit {

  constructor(private common: commonService) { }
  userpost:any=[]
  ngOnInit(): void {
    
    this.common.getuser_posts().subscribe((data) => {
      this.userpost = data;
     }) 
  }

}
