import { AfterViewInit, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { commonService } from '../common.service';
@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit,AfterViewInit{
  new_user_post:FormGroup;
  submitted=false
  constructor(private elementRef: ElementRef,
    public fb:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private commonservice:commonService,
    private co:CookieService,
    ) { this.mainForm()}
    mainForm()
    {
      this.new_user_post = this.fb.group({
        description: ['', [Validators.required]],
        file_uplode: ['']
        
      })
      // this.user_detailForm=
    }
    get myForm()
    {
      return this.new_user_post.contains;
    }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'linear-gradient(to right  , #5c6599 ,#7d71aa )';
 }
  
 ngOnInit(): void {
  // this.user_detailForm.controls.proof.patchValue(this.defaultValue);
  }
  onFileSelect(event)
  {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.new_user_post.get('file_uplode').setValue(file);
    }
  }
  onSubmit() {
    this.submitted = true;
    const formData = new FormData();
    formData.append('file_uplode', this.new_user_post.get('file_uplode').value);
    formData.append('description', this.new_user_post.get('description').value); 
    formData.append('user_id', this.co.get('login_user_id')); 
    formData.append('user_name', this.co.get('login_user_name'));
      
    if (!this.new_user_post.valid) {
      console.log("inside if");
      return false;
    } else {
      console.log(this.new_user_post.patchValue);
      this.commonservice.createuser_post(formData).subscribe(
        (res) => {
          console.log('user detail  successfully created!')
          // window.location.reload();
          // this.ngZone.run(() => this.router.navigateByUrl('/aa'))
        }, (error) => {
          console.log("xzcxxcxx"+error);
        });
    }
  }
}
