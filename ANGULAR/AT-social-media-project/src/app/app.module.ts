import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import{MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FindFeiendComponent } from './find-feiend/find-feiend.component';
import { PostVideoComponent } from './post-video/post-video.component';
import { PostPhotosComponent } from './post-photos/post-photos.component';
import { PostAudioComponent } from './post-audio/post-audio.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { MyfriendComponent } from './myfriend/myfriend.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginRegistetionComponent } from './login-registetion/login-registetion.component'
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent,
    FirstPageComponent,
    AddNewPostComponent,
    MyProfileComponent,
    FindFeiendComponent,
    PostVideoComponent,
    PostPhotosComponent,
    PostAudioComponent,
    PostBlogComponent,
    MyfriendComponent,
    AboutUsComponent,
    HelpComponent,
    ContactUsComponent,
    LoginRegistetionComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports:[MatIconModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
