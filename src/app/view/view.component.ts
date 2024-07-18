import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  username?: string;
  constructor(private client: DataService) {

    this.getUsername();
  }

  getUsername() {
    this.username = this.client.getUsername();
  }
}
