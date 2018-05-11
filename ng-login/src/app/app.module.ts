import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[
    LoginComponent
  ]
})
export class AppModule { 
  constructor(private injector:Injector){

  }

  ngDoBootstrap() {
    const el = createCustomElement(LoginComponent, { injector: this.injector });
    customElements.define('ng-login', el);
   }
}
