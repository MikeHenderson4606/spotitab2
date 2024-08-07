import { Component } from '@angular/core';
import { UGSearchComponent } from './ugsearch/ugsearch.component';
import { SpsearchComponent } from './spsearch/spsearch.component';

@Component({
  selector: 'app-search',
  standalone: true, 
  imports: [UGSearchComponent, SpsearchComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
}
