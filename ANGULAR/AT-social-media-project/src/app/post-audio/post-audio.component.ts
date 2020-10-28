import { Component, OnInit } from '@angular/core';

import { commonService } from '../common.service';

@Component({
  selector: 'app-post-audio',
  templateUrl: './post-audio.component.html',
  styleUrls: ['./post-audio.component.css']
})
export class PostAudioComponent implements OnInit {

  constructor(private common: commonService) { }
  userpost:any=[]
 
  ngOnInit(): void {
    this.common.getuser_posts().subscribe((data) => {
      this.userpost = data;
     }) 
  }

}
