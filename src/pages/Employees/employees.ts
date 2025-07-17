import { Component } from '@angular/core'
import { CommonModule} from '@angular/common';
import { AppHeaderComponent} from '../Header/header';

// ...
@Component({
  selector: 'employees',
  imports: [CommonModule, AppHeaderComponent],
  templateUrl: 'employees.html',
  styleUrls: ['employees.css'],
})
export class EmployeesComponent {
  //...
}
