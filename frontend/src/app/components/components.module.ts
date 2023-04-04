import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeadersComponent } from './headers/headers.component';
import { FormComponent } from './form/form/form.component';
import { ListItemComponent } from './form/list-item/list-item.component';
import { ChartsComponent } from './charts/charts.component';
import { ChatComponent } from './chating/chat/chat.component';
import { MessageComponent } from './chating/message/message.component';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeadersComponent,
    FormComponent,
    ListItemComponent,
    ChartsComponent,
    ChatComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
