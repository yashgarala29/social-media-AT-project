import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
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
import { LoginRegistetionComponent } from './login-registetion/login-registetion.component';
import { AppComponent } from './app.component';

const routes: Routes=[
  // { path: '', redirectTo: 'loginredister', pathMatch: 'full' },
  { path: 'loginredister',component:LoginRegistetionComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component:FirstPageComponent},
  { path: 'new_post',component:AddNewPostComponent},
  { path: 'my_profile',component:MyProfileComponent},
  { path: 'find_feiend',component:FindFeiendComponent},
  { path: 'video',component:PostVideoComponent},
  { path: 'photos',component:PostPhotosComponent},
  { path: 'audio',component:PostAudioComponent},
  { path: 'blog',component:PostBlogComponent},
  { path: 'myfriend',component:MyfriendComponent},
  { path: 'about_us',component:AboutUsComponent},
  { path: 'help',component:HelpComponent},
  { path: 'contact_us',component:ContactUsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
