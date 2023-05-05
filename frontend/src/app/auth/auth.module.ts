import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AUthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AuthComponent } from './auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    AuthComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AUthRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
