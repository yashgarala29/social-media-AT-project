import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {commonService} from '../common.service';
@Component({
  selector: '.app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  userpost:any=[]
  all_user_detail:any=[]
  constructor(
    private cookie:CookieService,
    private common: commonService) { 
    common.getuser_posts();
  }
  ngOnInit(): void {
    
   var user=this.cookie.get('login_user_id');

    



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
