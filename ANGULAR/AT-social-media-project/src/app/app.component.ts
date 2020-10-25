import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private co:CookieService){}
  title = 'AT-social-media-project';
  authService:boolean
  t:any
  ngOnInit(): void {
    
    console.log("111111111111111111111111111111111111111")
    this.t=this.co.get('login_user_id')
    console.log(this.t)
    if(!this.t)
    {
      this.authService=false
    }
    else
    {
      this.authService=true
    }
  }
  
}
