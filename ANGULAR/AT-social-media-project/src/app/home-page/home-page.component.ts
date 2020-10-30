import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  addClass:boolean=false
  class_name:string="text-dark"
  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
  }
  home()
  {

  }
  new_post()
  {

  }
  my_profile()
  {

  }
  find_feiend()
  {

  }
  video()
  {

  }
  photos()
  {

  }
  audio()
  {

  }
  blog()
  {

  }
  myfriend()
  {

  }
  about_us()
  {

  }
  help()
  {

  }
  contact_us()
  {
    
  }
  logout()
  {
    this.cookie.delete('login_user_id');
    window.location.reload()
  }

}
