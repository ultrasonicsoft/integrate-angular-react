import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class LoginComponent {

  userName;
  password;
  constructor() { }

  
  doLogin(){
    alert(`username: ${this.userName} password: ${this.password}`);
  }

}
