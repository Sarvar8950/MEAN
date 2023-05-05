import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpHelper } from 'src/app/Services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthHttpHelper]
})
export class LoginComponent {
  loginForm: FormGroup =  new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('',[ Validators.required, Validators.minLength(8)])
  });
  constructor(
    public http : AuthHttpHelper,
    public router : Router
  ) { }

  onInit() {
  }


  SignIn() {
    // console.log(this.loginForm)
    console.log(this.loginForm.value)
    if(this.loginForm.valid) {
      this.http.login(this.loginForm.value).subscribe((res:any) => {
        console.log({...res.data, token: res.token})
        if(res.responseStatus == "SUCCESS") {
          let data = {...res.data, token:res.token}
          sessionStorage.setItem("userDetails", JSON.stringify(data))
          this.router.navigate(['/core/dashboard'])
        }
      }, (err) => {
        console.log(err)
      })
    }
  }
}
