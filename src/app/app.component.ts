import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = ', Welcome to Angular ' + VERSION.major;

  firstname = 'Srini';
  lastname = 'vas';
  fullname = '';

  displayDiv = false;

  getFullName() {
    this.fullname = this.firstname + '_' + this.lastname;
  }


}
