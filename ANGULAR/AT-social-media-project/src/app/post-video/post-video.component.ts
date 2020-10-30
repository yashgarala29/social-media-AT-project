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
  
  all_user_detail:any=[]
 
  ngOnInit(): void {
    this.common.getuser_posts().subscribe((data) => {
      this.userpost = data;
     })
     
     this.common.getuser_details().subscribe((data) => {
      this.all_user_detail = data;
     })  
  }
  getuserphoto(user_id)
  {
    
    // console.log("user_id"+user_id)
    if(user_id.indexOf("5f")>-1)
    {
      
      var temp= this.all_user_detail.find(item=>item._id==user_id)
      // console.log(temp.user_profile_photo)
      return (temp.user_profile_photo)
    }
  }


}
