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
  user:any
  foll:any
  constructor(private common: commonService
    ,private cookie:CookieService,
    private commonservice:commonService) {
    
   }

  ngOnInit(): void {
    this.common.getuser_details().subscribe((data) => {
      this.alluser = data;
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
