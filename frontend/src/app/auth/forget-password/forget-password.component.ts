import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpHelper } from 'src/app/Services/auth.services';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: any;
  password: any;
  confirmpassword: any;
  securityAnswer: any;
  securityQuestion: any;
  validEmail: boolean = false;
  validSecurityAnswer: boolean = false;

  constructor(
    public http: AuthHttpHelper,
    public router : Router
  ) {

  }

  onInit() {
    this.validSecurityAnswer = false
    this.validEmail = false
  }

  changePassword() {
    // console.log({
    //   email: this.email,
    //   password: this.password
    // })
    if (this.password == this.confirmpassword) {
      let payload = {
        email: this.email,
        password: this.password
      }
      this.http.changePassword(payload).subscribe((res:any) => {
        // console.log(res)
        if(res.responseStatus == "SUCCESS") {
          this.router.navigate(['login'])
        }
      }, (err) => {
        console.log(err)
      })
    }

  }

  submit(data: string) {
    if (data == 'checkEmail') {
      let payload = {
        email: this.email
      }
      this.http.checkEmail(payload).subscribe((res: any) => {
        // console.log(res)
        if (res.responseStatus == "SUCCESS") {
          this.securityQuestion = res.data.securityQuestion
          this.validEmail = true
        }
      },
        (err) => {
          console.log(err)
        })
    } else {
      let payload = {
        email: this.email,
        securityAnswer: this.securityAnswer
      }
      this.http.checkSecurityAnswer(payload).subscribe((res: any) => {
        // console.log(res)
        if (res.responseStatus == "SUCCESS") {
          this.validSecurityAnswer = true
        }
      },
        (err) => {
          console.log(err)
        })
    }
  }

}
