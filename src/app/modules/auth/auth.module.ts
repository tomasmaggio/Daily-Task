import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
