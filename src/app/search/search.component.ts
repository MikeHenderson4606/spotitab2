import { Component } from '@angular/core';
import { UGSearchComponent } from './ugsearch/ugsearch.component';

@Component({
  selector: 'app-search',
  standalone: true, 
  imports: [UGSearchComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
}
