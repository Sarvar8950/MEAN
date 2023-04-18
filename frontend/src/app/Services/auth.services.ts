import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn:"root"
})
export class AuthHttpHelper {
    loginUrl:string = 'http://localhost:8000/login';
    registerUrl:string = 'http://localhost:8000/register';
    checkEmailUrl:string = 'http://localhost:8000/getSecurityQuestion';
    checkSecurityAnswerUrl:string = 'http://localhost:8000/checkSecurityAnswer';
    changePasswordUrl:string = 'http://localhost:8000/changePassword';
    constructor(
        public http : HttpClient
    ) {}

    login(data:any) {
        return this.http.post(this.loginUrl, data)
    }
    register(data:any) {
        return this.http.post(this.registerUrl, data)
    }
    checkEmail(data:any) {
        return this.http.post(this.checkEmailUrl, data)
    }
    checkSecurityAnswer(data:any) {
        return this.http.post(this.checkSecurityAnswerUrl, data)
    }
    changePassword(data:any) {
        return this.http.patch(this.changePasswordUrl, data)
    }
}