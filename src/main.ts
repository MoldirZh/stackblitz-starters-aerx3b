import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-component><app-component>
  `,
  imports: [AppComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
