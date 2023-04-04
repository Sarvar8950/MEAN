import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AUthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    AuthHomeComponent
  ],
  imports: [
    CommonModule,
    AUthRoutingModule
  ]
})
export class AuthModule { }
