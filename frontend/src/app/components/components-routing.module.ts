import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../Services/authGuard.services';
import { FormComponent } from './form/form/form.component';
import { ComponentsComponent } from './components.component';
import { ListItemComponent } from './form/list-item/list-item.component';
import { ChartsComponent } from './charts/charts.component';
import { ChatComponent } from './chating/chat/chat.component';

const routes: Routes = [
  {
    path : "", component : ComponentsComponent,
    //  canActivateChild : [AuthGuard],
    children :[
      { path: 'dashboard', component: HomeComponent },
      { path: 'addTodos', component: FormComponent },
      { path: 'listTodos', component: ListItemComponent },
      { path: 'chatPge', component: ChatComponent },
      { path: 'charts', component: ChartsComponent },
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
