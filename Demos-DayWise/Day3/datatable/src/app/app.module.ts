import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { SigninComponent } from './jwt/signin/signin.component';
import { SignupComponent } from './jwt/signup/signup.component';
import { UserProfileComponent } from './jwt/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    DynamicComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
