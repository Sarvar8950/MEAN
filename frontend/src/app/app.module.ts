import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AuthModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
