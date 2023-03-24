import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './jwt/signin/signin.component';
import { SignupComponent } from './jwt/signup/signup.component';
import { UserProfileComponent } from './jwt/user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'userprofile/:id',component:UserProfileComponent,
canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
