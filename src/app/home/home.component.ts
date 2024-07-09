import { Component, Query } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { QueryResult, TabProp } from '../types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tabs: QueryResult[] | undefined;

  constructor(private client: DataService) {
    this.ngOnInit();
  }

  ngOnInit() {
    const testTab: TabProp = {
      searchType: 'title',
      value: 'something in the orange',
      page: 1
    };
    this.client.getQueryResults(testTab).subscribe((response) => {
      this.tabs = response;
      console.log(response);
    });
  }
}
