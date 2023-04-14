import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN';
  userDetails : any = false;

  constructor(
    public router : Router
  ) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['/login'])
  }

  loginPage() {
    this.router.navigate(['/login'])
  }

  signUpPage() {
    this.router.navigate(['/register'])
  }
}
