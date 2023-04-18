import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn:"root"
})
export class ComponentHttpHelper {
    baseUrl:string = 'http://localhost:8000/';
    constructor(
        public http : HttpClient
    ) {}

    get(url:string) {
        return this.http.get(this.baseUrl+url)
    }
    post(url:string,data:any) {
        return this.http.post(this.baseUrl+url, data)
    }
    patch(url:string,data:any) {
        return this.http.patch(this.baseUrl+url, data)
    }
    delete(url:string) {
        return this.http.delete(this.baseUrl+url)
    }
}