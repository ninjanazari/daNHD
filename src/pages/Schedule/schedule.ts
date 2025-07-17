import { Component } from '@angular/core'
import { CommonModule} from '@angular/common';
import { AppHeaderComponent} from '../Header/header';

// ...
@Component({
  selector: 'schedule',
  imports: [CommonModule, AppHeaderComponent],
  templateUrl: 'schedule.html',
  styleUrls: ['schedule.css'],
})
export class ScheduleComponent {
  //...
}
