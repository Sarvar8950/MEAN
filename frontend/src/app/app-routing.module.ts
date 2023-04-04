import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';

const routes: Routes = [
  // { path: '', component: AuthModule },
  // { path: 'components', component: ComponentsModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
