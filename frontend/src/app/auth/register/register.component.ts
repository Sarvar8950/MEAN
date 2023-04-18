import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpHelper } from 'src/app/Services/auth.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup =  new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('',[ Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('',[ Validators.required, Validators.minLength(8)]),
    securityQuestion: new FormControl('What is your favourite Book?', Validators.required),
    securityAnswer: new FormControl('', Validators.required),
  });
  constructor(
    public http : AuthHttpHelper,
    public router : Router
  ) { }

  onInit() {
  }

  register() {
    console.log(this.registerForm.value)
    if(this.registerForm.valid) {
      this.http.register(this.registerForm.value).subscribe((res:any) => {
        console.log(res)
        if(res.responseStatus == "SUCCESS") {
          this.router.navigate(['login'])
        }
      }, (err) => {
        console.log(err)
      })
    }
  }
}
