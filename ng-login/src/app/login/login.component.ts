import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class LoginComponent {
  @Input() username = '';
  @Input() password = '';

  @Output('login') login = new EventEmitter<any>();

  constructor() { }

  doLogin() {
    let user = {
      "username": this.username,
      "password": this.password
    };
    this.login.emit(user)
    console.log('emitting event');
  }
}
