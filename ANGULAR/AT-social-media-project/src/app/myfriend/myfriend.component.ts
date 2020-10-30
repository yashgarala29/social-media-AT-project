import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { asyncScheduler } from 'rxjs';
import { commonService } from '../common.service';

@Component({
  selector: 'app-myfriend',
  templateUrl: './myfriend.component.html',
  styleUrls: ['./myfriend.component.css']
})
export class MyfriendComponent implements OnInit {

  myfriend:any=[]
  temp_friend:any=[]
  user_data:any
  foll:any
  constructor(private common: commonService
    ,private cookie:CookieService,
    private commonservice:commonService) {
    
   }
   
   user=this.cookie.get('login_user_id');
   ngOnInit(): void {

    this.common.getuser_detail(this.user).subscribe(async(data) => {
      this.user_data = data;
      for (let index = 0; index < this.user_data.following.length; index++) {
      if(this.user_data.following[index].following_id !=null)
      {
        this.common.getuser_detail(this.user_data.following[index].following_id).subscribe((data) => {
        this.myfriend.push(data)
        
       })
      } 
      }
     }) 
    
  }
  unFollow(event)
  {
    
    this.user=this.cookie.get('login_user_id');
    this.foll= event.target.id
    var formdata=new FormData();
    formdata.append("user",this.user)
    formdata.append("foll",this.foll)
    this.commonservice.add_unfollowe(formdata).subscribe(
      (res) => {
        console.log('user detail  successfully created!')
        // window.location.reload();
        // this.ngZone.run(() => this.router.navigateByUrl('/aa'))
      }, (error) => {
        console.log("xzcxxcxx"+error);
      });

  }


}
