import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuard } from '../Services/authGuard.services';
import { AuthComponent } from './auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   path: '', component: AuthComponent
  // },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'forget-password', component: ForgetPasswordComponent },
  // { path: '**', component: PageNotFoundComponent },
  // {
  //   path: 'core',
  //   canActivateChild: [AuthGuard],
  //   loadChildren: () => import("../components/components.module").then(m => m.ComponentsModule)
  // },

  {
    path: '', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
    ]
  },
  {
    path: '',
    // canActivateChild: [AuthGuard],
    loadChildren: () => import("../components/components.module").then(m => m.ComponentsModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AUthRoutingModule {

  ngOnInit() {
    console.log("Auth Module Load")
  }

}
