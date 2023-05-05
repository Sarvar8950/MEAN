import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../Services/authGuard.services';
import { FormComponent } from './form/form/form.component';

const routes: Routes = [
  {
    path : "", component : HomeComponent,
    //  canActivateChild : [AuthGuard],
    children :[
      { path: 'dashboard', component: HomeComponent },
      { path: 'form', component: FormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {

  ngOnInit() {
    console.log("Component Module Load")
  }
 }
