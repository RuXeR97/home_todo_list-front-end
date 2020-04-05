import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CustomMaterialModule } from "./core/material.module";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginPageComponent } from "./login-page/login-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { appRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { ErrorInterceptor } from "./helpers/error.interceptor";
import { HomeComponent } from "./home/home.component";
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, HomeComponent, RegisterPageComponent],
  imports: [
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
