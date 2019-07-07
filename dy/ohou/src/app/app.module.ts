import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CapsLockDirective } from './caps-lock.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CapsLockDirective
  ],
  imports: [
    BrowserModule
    , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
