import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn: "root"
})
export class AuthGuard {
    baseUrl: string = 'http://localhost:8000/';
    constructor(
        public http: HttpClient
    ) { }

    canActivateChild() {
        if (sessionStorage.getItem("userDetails")) {
            let userDetails = JSON.parse(sessionStorage.getItem("userDetails") || "")
            this.http.post("http://localhost:8000/validateToken", { "token": userDetails.token }).subscribe((res: any) => {
                if (res.responseStatus == 'SUCCESS') {
                    return true
                } else {
                    return false
                }
            }, (err: any) => {
                return false
            })
        }
        return false

    }
}