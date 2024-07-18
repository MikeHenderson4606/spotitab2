import axios from 'axios';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryResult, TabProp, ObservableQueryResponse, TabData } from '../types';
import { Observable } from 'rxjs';

type crypto = {
    verifier: string,
    challenge: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
    api = axios.create({withCredentials: true});
    redirect_uri: string;
    API_BASE: string;
    UG_BASE: string;

    constructor(private http: HttpClient) { 
        this.redirect_uri = 'http://localhost:8000/api/spcallback';
        this.API_BASE = 'http://localhost:8000/api';
        this.UG_BASE = 'http://localhost:8000/ug';
    }

    getQueryResults(props: TabProp): Observable<QueryResult[]> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('search_type', props.searchType);
        httpParams = httpParams.append('value', props.value);
        httpParams = httpParams.append('page', props.page);
        console.log("Getting query results");
        const tabResponse = this.http.get<QueryResult[]>(this.UG_BASE + '/queryTabs', { params: httpParams });
        return tabResponse;
    }

    getTabData(tabURL: string): Observable<TabData> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('tabURL', tabURL);
        console.log("Getting tab info");
        return this.http.get<TabData>(this.UG_BASE + '/getTabInfo', { params: httpParams });
    }

    getUsername(): string {
        // const response = this.api.get(this.API_BASE + "/username");
        // return response.data;
        return 'Username';
    }
    
    async generateCryptoKeys(): Promise<crypto> {
        const generateRandomString = (length: number) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = window.crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc, x) => acc + possible[x % possible.length], "");
        }
    
        const sha256 = async (plain: string) => {
            const encoder = new TextEncoder();
            const data = encoder.encode(plain);
            return window.crypto.subtle.digest('SHA-256', data);
        };
        
        const base64encode = (input: ArrayBuffer) => {
            const array = new Uint8Array(input);
            return btoa(String.fromCharCode(...array))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
        };
    
        const codeVerifier  = generateRandomString(64);
        const hashed = await sha256(codeVerifier);
        const codeChallenge = base64encode(hashed);
    
        return {
            verifier: codeVerifier,
            challenge: codeChallenge
        };
    }
    
    async connectSpotifyUser(): Promise<number> {
        console.log("Connecting user")
        let codeVerifier = "";
        let codeChallenge = "";
        await this.generateCryptoKeys().then((result: any) => {
            codeVerifier = result.verifier;
            codeChallenge = result.challenge;
            console.log("Generated codes");
        });
    
        console.log("Code verifier: " + codeVerifier);
    
        const scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state';
        const authUrl = new URL("https://accounts.spotify.com/authorize");
    
        const params =  {
            response_type: 'code',
            client_id: '9105a9e75db44212b7ec076f5763c85e',
            scope: scope,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: this.redirect_uri,
        }
    
        const headers = {
            'Content-Type': 'application/json',
        };
    
        console.log("Logging in user");
        const response = await this.api.get(`${this.API_BASE}/setCodeVerifier/${codeVerifier}`, 
        {
            headers: headers
        }
        );
    
        if (response.status === 200) {
            authUrl.search = new URLSearchParams(params).toString();
            window.location.href = authUrl.toString();
            return 200;
        } else {
            return 400;
        }
    }
}