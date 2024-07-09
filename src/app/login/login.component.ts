import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private client: DataService) {
  }

  ngOnInit() {
    this.client.connectSpotifyUser();
  }
}
