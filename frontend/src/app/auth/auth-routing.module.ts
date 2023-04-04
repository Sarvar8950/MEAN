import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './auth-home/auth-home.component';

const routes: Routes = [
  { path: '', component: AuthHomeComponent },
  // { path: '/', component: ComponentsModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AUthRoutingModule { }
