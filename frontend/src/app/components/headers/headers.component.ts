import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  title = 'MEAN';
  userDetails: any = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }


  logout() {
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }

}
