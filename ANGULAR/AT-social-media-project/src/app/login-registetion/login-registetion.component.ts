import { AfterViewInit, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { commonService } from '../common.service';
import{AppComponent}from '../app.component'
@Component({
  selector: 'app-login-registetion',
  templateUrl: './login-registetion.component.html',
  styleUrls: ['./login-registetion.component.css']
})
export class LoginRegistetionComponent implements OnInit,AfterViewInit  {

  // document.body.style.backgroundColor = "red";
  
  auth:any;
  submitted=false;
  user_detailForm:FormGroup;
  validation_Form:FormGroup;
  constructor(private elementRef: ElementRef,
    public fb:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private commonservice:commonService,
    private coockie:CookieService,
    private appComponent:AppComponent
    
    ) { this.mainForm()}
    mainForm()
    {
      this.user_detailForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        birthdate: ['', [Validators.required ]]
      })
      this.validation_Form = this.fb.group({
        username_name: ['', [Validators.required]],
        password_name: ['', [Validators.required]],
        
      })
      
    }
    get myForm()
    {
      return this.user_detailForm.contains;
    }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'linear-gradient(to right  , #5c6599 ,#7d71aa )';
 }
  
 ngOnInit(): void {
  // this.user_detailForm.controls.proof.patchValue(this.defaultValue);
  }
  
  
  onSubmit() {
    this.submitted = true;
    if (!this.user_detailForm.valid) {
      console.log("inside if");
      return false;
    } else {
      console.log("inside else");
      this.commonservice.createuser_detail(this.user_detailForm.value).subscribe(
        (res) => {
          console.log('user detail  successfully created!')
          window.location.reload();
          // this.ngZone.run(() => this.router.navigateByUrl('/aa'))
        }, (error) => {
          console.log("xzcxxcxx"+error);
        });
    }
  }

  onSubmit_login()
  {
    this.submitted = true;
    if (!this.validation_Form.valid) {
      console.log("inside if");
      return false;
    } else {
      this.auth=this.commonservice.user_authen(this.validation_Form.value).subscribe(
       
        (res) => {
          this.auth=res
          console.log('user detail  successfull',res)
          
          console.log("his.auth.length"+this.auth.length )
          if(this.auth.length>0)
          {
            // this.appComponent.authService=true;
            console.log(this.auth[0]._id)
            this.coockie.set("login_user_id",this.auth[0]._id,50000)
            this.coockie.set("login_user_name",this.auth[0].name,50000)
            
            
            window.location.reload();
            
          }
            
        }, (error) => {
          console.log("xzcxxcxx"+error);
        });
    }

    
  
    
  }
}
