import { Component, OnInit } from '@angular/core';
import { commonService } from '../common.service';

import{CookieService} from 'ngx-cookie-service'


@Component({
  selector: 'app-find-feiend',
  templateUrl: './find-feiend.component.html',
  styleUrls: ['./find-feiend.component.css']
})
export class FindFeiendComponent implements OnInit {

  alluser:any=[];
  new_user:any=[]
  friend_data:any=[];
  foll:any
  constructor(private common: commonService
    ,private cookie:CookieService,
    private commonservice:commonService) {
    
   }
   user=this.cookie.get('login_user_id');
   
  ngOnInit(): void {
    this.common.getuser_details().subscribe((data) => {
      this.alluser = data;
      
    this.common.getuser_detail(this.user).subscribe(async(data) => {
      this.friend_data=data.following
      for(var i=0;i<this.friend_data.length;i++)
      {
        if(this.friend_data[i].following_id != null)
        {
          
        let x=this.friend_data[i].following_id
          // console.log(this.friend_data[i].following_id)
          var t=this.alluser
          this.alluser.forEach(function(e, index)  {
            // console.log(e._id+"this.friend_data[i].following_id "+x )
            if(e._id == x )
              t.splice(index, 1);
          });
          // console.log(t)
        }
      }
    })
     }) 
    
  }
  Follow(event)
  {
    
    this.user=this.cookie.get('login_user_id');
    this.foll= event.target.id
    var formdata=new FormData();
    formdata.append("user",this.user)
    formdata.append("foll",this.foll)
    this.commonservice.add_followe(formdata).subscribe(
      (res) => {
        console.log('user detail  successfully created!')
        // window.location.reload();
        // this.ngZone.run(() => this.router.navigateByUrl('/aa'))
      }, (error) => {
        console.log("xzcxxcxx"+error);
      });

  }
  
}
