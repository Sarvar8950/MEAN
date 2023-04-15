import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor() { }

  onInit() {
  }

  register() {
    console.log(this.registerForm.value)
  }
}
