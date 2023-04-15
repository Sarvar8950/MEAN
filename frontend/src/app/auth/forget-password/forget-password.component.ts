import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email:any;
  password:any;
  confirmpassword:any;
  securityAnswer:any;
  securityQuestion:any;

  constructor() {

  }

  onInit() {

  }

  changePassword() {
    console.log({
      email:this.email,
      password:this.password,
      confirmpassword:this.confirmpassword,
      securityAnswer:this.securityAnswer,
      securityQuestion:this.securityQuestion
    })
  }

}
