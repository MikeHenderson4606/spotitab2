import { Component, Query } from '@angular/core';
import Client from '../client/client';

const client = new Client();

type TabProp = {
  searchType: string,
  value: string,
  page: number
}

type AlbumCover = {
  has_album_cover: boolean;
  web_album_cover: WebAlbumCover;
}

type WebAlbumCover = {
  small: string;
}

type ArtistCover = {
  has_artist_cover: boolean;
  web_artist_cover: WebArtistCover;
}

type WebArtistCover = {
  small: string;
}

type Recording = {
  is_acoustic: number;
  performance: Performance;
  recording_artists: string[];
  tonality_name: string;
}

type Performance = {
  cancelled: number;
  comment: string;
  date_end: number;
  date_start: number;
  name: string;
  serie: string;
  type: string;
  venue: string;
  video_urls: string[];
}

type QueryResult = {
  album_cover: AlbumCover;
  artist_cover: ArtistCover;
  artist_id: number;
  artist_name: string;
  artist_url: string;
  date: string;
  difficulty: string;
  id: number;
  part: string;
  preset_id: number;
  rating: number;
  recording: Recording;
  song_id: number;
  song_name: string;
  status: string;
  tab_access_type: string;
  tab_url: string;
  tonality_name: string;
  tp_version: number;
  verified: number;
  version: number;
  version_description: string;
  votes: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tabs: Promise<QueryResult[]>;

  constructor() {
    const tabsPromise = this.getQueryResults();
    this.tabs = tabsPromise.then((data) => {
      return data;
    });
  }

  async getQueryResults(): Promise<QueryResult[]> {
    const testTab: TabProp = {
      searchType: 'title',
      value: 'hotel california',
      page: 1
    };
  
    const response = await client.queryTabs(testTab);
    console.log(response);
    return response;
  }
}
