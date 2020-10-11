import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import{Form, FormsModule} from '@angular/forms';
import { MypowerPipe } from './mypower.pipe';
import { HihlightDirective } from './hihlight.directive';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MypowerPipe,
    HihlightDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
