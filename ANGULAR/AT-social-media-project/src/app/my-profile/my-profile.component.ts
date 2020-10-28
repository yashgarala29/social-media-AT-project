import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { commonService } from '../common.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  edit_user_profile:FormGroup;
  user_profile_photo:any;
  user_detail:any;
  user_id:any;
  submitted=false;
  first_name:any;
  password_name:any;
  re_password_name:any;
  email_name:any;
  date_name:any;
  constructor(private elementRef: ElementRef,
    public fb:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private commonservice:commonService,
    private co:CookieService,
    ) { }
    
    get myForm()
    {
      return this.edit_user_profile.contains;
    }

  ngOnInit(): void {
    this.user_id=this.co.get('login_user_id')
    console.log("this is user detail "+this.user_detail)
    this.commonservice.getuser_detail(this.user_id).subscribe(
      (res)=>
      {
        this.user_detail=res;
        this.first_name=res.name;
        this.password_name=res.password;
        this.re_password_name=res.password;
        this.email_name=res.email;
        this.date_name=res.birthdate
        // console.log(this.date_name)

      }
    )
  }
  onFileChange(event)
  {
      this.user_profile_photo=event.target.files[0];
      console.log(this.user_profile_photo)
  }
  
  onSubmit()
  {
    console.log(this.email_name)
    this.submitted = true;
    const formData = new FormData();
    formData.append('user_profile_photo',this.user_profile_photo);
    formData.append('name', this.first_name); 
    formData.append('_id', this.co.get('login_user_id')); 
    formData.append('email',this.email_name)
    formData.append('password',this.password_name);
    formData.append('birthdate',this.date_name);
      
    
      this.commonservice.updateuser_detail(this.co.get('login_user_id'),formData).subscribe(
        (res) => {
          console.log('user detail  successfully created!')
          // window.location.reload();
          // this.ngZone.run(() => this.router.navigateByUrl('/aa'))
        }, (error) => {
          console.log("xzcxxcxx"+error);
        });
    
  }
}
