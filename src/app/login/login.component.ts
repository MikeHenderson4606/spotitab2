import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { GlobalService } from '../services/global.service';
import { GlobalState } from '../types';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private client: DataService,
              private service: GlobalService
  ) {
    this.service.loggedInState.subscribe({
      next: (newLoggedInState: boolean) => console.log("You have logged in successfully. New state: " + newLoggedInState),
      error: (err: any) => console.log("There was a problem logging you in")
    })
    this.connectUser();
  }

  async connectUser() {
    await this.client.connectSpotifyUser();
    
    const isLoggedIn = this.client.getLoggedInStatus();
    console.log(isLoggedIn);
    this.service.loggedInState.next(isLoggedIn);
    console.log(this.service.loggedInState.value);
  }
}
