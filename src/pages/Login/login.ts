import { Component } from '@angular/core'
import { CommonModule} from '@angular/common';
import { AppHeaderComponent} from '../Header/header';
import { FormsModule} from '@angular/forms';

// ...
@Component({
  selector: 'login',
  imports: [CommonModule, AppHeaderComponent, FormsModule],
  templateUrl: 'login.html',
  styleUrls: ['login.css'],
})
export class LoginComponent {
  emailAddress: string = ' ';

  handleLogin(){
    // Connection to API
    console.log('write email address:', this.emailAddress);
  }
}
