import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent} from '../Header/header';

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent],
  templateUrl: 'register.html',
  styleUrls: ['register.css'],
})

export class RegisterComponent {}
