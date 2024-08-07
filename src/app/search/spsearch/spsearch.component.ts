import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { GlobalService } from '../../services/global.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-spsearch',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './spsearch.component.html',
  styleUrl: './spsearch.component.css'
})
export class SpsearchComponent {
  spSearchInput = new FormControl("");
  isLoggedIn = false;

  constructor(private client: DataService,
              private service: GlobalService
  ) {
    this.isLoggedIn = this.client.getLoggedInStatus();
  }
}
