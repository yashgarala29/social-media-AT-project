import { Component, OnInit } from '@angular/core';
import{MatIcon} from '@angular/material/icon'
import{CookieService} from 'ngx-cookie-service'
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.cookie.delete('login_user_id');
    window.location.reload()
  }
}
