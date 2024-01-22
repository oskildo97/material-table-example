
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {MatTableModule} from '@angular/material/table';
import { User } from './interfaces/user';


const CUSTOMER_DATA: User[] = [
  { name: 'oskildo', lasName: 'podols', age: 20 }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  displayedColumns: string[] = [ 'name', 'lasName', 'age' ];
  dataSource = CUSTOMER_DATA;
}
