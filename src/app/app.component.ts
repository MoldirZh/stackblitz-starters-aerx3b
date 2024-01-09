import { Component, inject } from '@angular/core';
import { Employee, LookupGridService, State } from './app.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import {
  DxDataGridModule,
  DxSelectBoxModule,
  DxButtonModule,
} from 'devextreme-angular';

@Component({
  selector: 'app-component',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    FormsModule,
    CommonModule,
    NgClass,
    CurrencyPipe,
    DatePipe,
    DxDataGridModule,
    DxButtonModule,
    DxSelectBoxModule,
  ],
})
export class AppComponent {
  service = inject(LookupGridService);
  dataSource: Employee[];

  states: State[];
  products: any[];
  events: Array<string> = [];

  constructor() {
    this.dataSource = this.service.getEmployees();
    this.states = this.service.getStates();
    this.products = this.service.getProducts();
  }

  logEvent(eventName: any) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

  name = 'Angular';
}
