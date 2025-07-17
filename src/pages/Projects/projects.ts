import { Component } from '@angular/core'
import { CommonModule} from '@angular/common';
import { AppHeaderComponent} from '../Header/header';

// ...
@Component({
  selector: 'projects',
  imports: [CommonModule, AppHeaderComponent],
  templateUrl: 'projects.html',
  styleUrls: ['projects.css'],
})
export class ProjectsComponent {
  //...
}
