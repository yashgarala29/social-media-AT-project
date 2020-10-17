import { AfterViewInit, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { commonService } from '../common.service';

@Component({
  selector: 'app-login-registetion',
  templateUrl: './login-registetion.component.html',
  styleUrls: ['./login-registetion.component.css']
})
export class LoginRegistetionComponent implements OnInit,AfterViewInit  {

  // document.body.style.backgroundColor = "red";
  submitted=false;
  user_detailForm:FormGroup;
  constructor(private elementRef: ElementRef,
    public fb:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private commonservice:commonService,
    
    ) { this.mainForm()}
    mainForm()
    {
      this.user_detailForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        birthdate: ['', [Validators.required ]]
      })
      // this.user_detailForm=
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
}
