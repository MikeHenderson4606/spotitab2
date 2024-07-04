import { Component } from '@angular/core';
import Client from '../client/client';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  username?: string;
  client: Client;
  constructor() {
    this.client = new Client();

    this.getUsername().then(response => {
      this.username = response
    });
  }

  async getUsername(): Promise<string> {
    const response = await this.client.getUsername();
    console.log(response);
    return response;
  }
}
