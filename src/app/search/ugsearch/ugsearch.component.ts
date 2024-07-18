import { Component, Input, Query } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { GlobalState, QueryResult, TabData, TabProp } from '../../types';
import { NgFor, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-ugsearch',
  standalone: true,
  imports: [NgFor, NgClass, FormsModule, ReactiveFormsModule],
  templateUrl: './ugsearch.component.html',
  styleUrl: './ugsearch.component.css'
})
export class UGSearchComponent {
  ugSearchInput = new FormControl("");
  pageNumber : number = 1;
  totalPages : number = 4;
  tabs: QueryResult[][] | undefined;
  tabData: TabData = {
    tabText: '',
    artistName: '',
    songName: '',
    songUrl: ''
  };
  displaySearchBorder: boolean = true;

  constructor(private client: DataService, 
              private globalService: GlobalService
  ) { 
    this.globalService.globalState.subscribe({
      next: (newTab: GlobalState) => console.log("A new tab has been selected"),
      error: (err:any) => console.log("There was an error selecting the tab")
    });
  }

  ngOnInit(): void { }

  categorizeTabs(response: QueryResult[]): QueryResult[][] {
    var categorizedTabs: QueryResult[][] = [[]];
    var currTab = response[0];
    var newSong = 0;
    for (let i = 0; i < response.length; i++) {
      if (currTab.artist_name === response[i].artist_name && currTab.song_name === response[i].song_name) {
        categorizedTabs[newSong].push(response[i]);
      } else {
        currTab = response[i];
        newSong++;
        categorizedTabs[newSong] = [];
        categorizedTabs[newSong].push(response[i]);
      }
    }
    console.log(categorizedTabs);
    return categorizedTabs;
  }

  submitQuery(): void {
    this.pageNumber = 1;
    this.querySongs();
  }

  querySongs(): void {
    console.log("Querying: ");
    const queryTab: TabProp = {
      searchType: 'title',
      value: this.ugSearchInput.getRawValue()!,
      page: this.pageNumber
    }
    this.client.getQueryResults(queryTab).subscribe((response) => {
      this.tabs = this.categorizeTabs(response.slice(1));
      this.displaySearchBorder = false;
      this.totalPages = Math.ceil((response.at(0) as unknown as number) / 50);
    });
  }

  updateSelectedTab(tabURL: string): void {
    const currentLoggedInState: boolean = this.globalService.globalState.value.isLoggedIn;
    this.client.getTabData(tabURL).subscribe((response) => {
      console.log(response);
      this.globalService.globalState.next({
        selectedTab: response.tabText,
        artistName: response.artistName,
        songName: response.songName,
        isLoggedIn: currentLoggedInState
      });
      this.tabData = {
        tabText: this.formatTab(response.tabText),
        artistName: response.artistName,
        songName: response.songName,
        songUrl: response.songUrl
      };
    });
  }

  formatTab(rawText: string): string {
    const refinedTab = rawText.replaceAll('[tab]', '')
                              .replaceAll('[/tab]', '')
                              .replaceAll('[ch]', '')
                              .replaceAll('[/ch]', '')
                              .replaceAll('&amp;', '&').trim();
    return refinedTab;
  }

  pageUp() : void {
    if (this.pageNumber + 1 <= this.totalPages) {
      this.pageNumber++;
      this.querySongs();
    }
  }

  pageDown() : void {
    if (this.pageNumber - 1 >= 1) {
      this.pageNumber--;
      this.querySongs();
    }
  }

  clearSelectedTab(): void {
    this.tabData = {
      tabText: '',
      artistName: '',
      songName: '',
      songUrl: ''
    };
    const currentLoggedInState: boolean = this.globalService.globalState.value.isLoggedIn;
    this.globalService.globalState.next({
      selectedTab: "",
      artistName: "",
      songName: "",
      isLoggedIn: currentLoggedInState
    });
  }
}
