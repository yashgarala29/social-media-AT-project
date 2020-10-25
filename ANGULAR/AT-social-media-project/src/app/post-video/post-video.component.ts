import { Component, OnInit } from '@angular/core';
import { commonService } from '../common.service';

@Component({
  selector: 'app-post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.css']
})
export class PostVideoComponent implements OnInit {
 
  constructor(private common: commonService) { }
  userpost:any=[]
 
  ngOnInit(): void {
    this.common.getuser_posts().subscribe((data) => {
      this.userpost = data;
     }) 
  }

}
