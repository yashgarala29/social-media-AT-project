import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import{MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  exports:[MatIconModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
