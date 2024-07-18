import { Component, Query } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { QueryResult, TabProp } from '../types';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
