import { Component } from '@angular/core';
import Client from '../client/client';

const client = new Client();

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor() {
    client.connectSpotifyUser();
  }
}
