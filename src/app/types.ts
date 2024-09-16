import { Observable } from "rxjs"


export type TabProp = {
    searchType: string,
    value: string,
    page: number
}

export type GlobalState = {
    selectedTab: string,
    artistName: string,
    songName: string
}

export type TabData = {
    tabText: string,
    artistName: string,
    songName: string,
    songUrl: string
}

export type QueryResult = {
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
    type: string;
    verified: number;
    version: number;
    version_description: string;
    votes: number;
}

export type ObservableQueryResponse = {
    tabResponse: Observable<QueryResult[]>,
    totalTabs: Observable<number>
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

export type SPQueryResult = {
    tracks: SPTrackResult,
    artists: SPArtistResult,
    albums: SPAlbumResult,
    playlists: SPPlaylistResult,
    shows: SPShowsResult,
    episodes: SPEpisodesResult,
    audiobooks: SPAudiobooksResult
}

export type SPAudiobooksResult = {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: SPSimplifiedAudiobooks[]
}

type SPSimplifiedAudiobooks = {
    authors: SPAuthor[],
    available_markets: string[],
    copyrights: SPCopyright[],
    description: string,
    html_description: string,
    edition: string,
    explicit: boolean,
    external_urls: SPExternalUrls,
    href: string,
    id: string,
    images: SPImages[],
    languages: string[],
    media_type: string,
    name: string,
    narrators: SPNarrators[],
    publisher: string,
    type: string,
    uri: string,
    total_chapters: number
}

type SPAuthor = {
    name: string
}

type SPNarrators = {
    name: string
}

export type SPEpisodesResult = {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: SPSimplifiedEpisodes[]
}

type SPSimplifiedEpisodes = {
    audio_preview_url: string,
    description: string,
    html_description: string,
    duration_ms: number,
    explicit: boolean,
    external_urls: SPExternalUrls,
    href: string,
    id: string,
    images: SPImages[],
    is_externally_hosted: boolean,
    is_playable: boolean,
    languages: string[],
    name: string,
    release_date: string,
    release_date_precision: string,
    resume_point: SPResumePoint,
    type: string,
    uri: string,
    restriction: SPRestrictions
}

type SPResumePoint = {
    fully_played: boolean,
    resume_position_ms: number
}

export type SPShowsResult = {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: SPSimplifiedShows[]
}

type SPSimplifiedShows = {
    available_markets: string[],
    copyrights: SPCopyright[],
    description: string,
    html_description: string,
    explicit: boolean,
    external_urls: SPExternalUrls,
    href: string,
    id: string,
    images: SPImages[],
    is_externally_hosted: boolean,
    languages: string[],
    media_type: string,
    name: string,
    publisher: string,
    type: string,
    uri: string,
    total_episodes: number
}

type SPCopyright = {
    text: string,
    type: string
}

export type SPPlaylistResult = {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: SPSimplifiedPlaylist[]
}

type SPSimplifiedPlaylist = {
    collaborative: boolean,
    description: string,
    external_urls: SPExternalUrls,
    href: string,
    id: string,
    images: SPImages[],
    name: string,
    owner: SPUser,
    public: boolean,
    snapshot_id: string,
    tracks: SPPlaylistTrack,
    type: string,
    uri: string
}

type SPUser = {
    external_urls: SPExternalUrls,
    followers: SPFollowers,
    href: string,
    id: string,
    type: string,
    uri: string,
    display_name: string
}

type SPPlaylistTrack = {
    href: string,
    total: number
}

export type SPAlbumResult = {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: SPSimplifiedAlbum[]
}

type SPArtistResult = {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: SPArtistItem[]
}

type SPArtistItem = {
    external_urls: SPExternalUrls,
    followers: SPFollowers,
    genres: string[],
    href: string,
    id: string,
    images: SPImages[],
    name: string,
    popularity: number,
    type: string,
    uri: string
}

type SPFollowers = {
    href: string,
    total: number
}

export type SPTrackResult = {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: SPTrackItem[]
}

type SPTrackItem = {
    album: SPSimplifiedAlbum,
    artists: SPSimplifiedArtist[],
    available_markets: string[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: SPExternalIds,
    external_urls: SPExternalUrls,
    href: string,
    id: string,
    is_playable: boolean,
    linked_from: {},
    restrictions: SPRestrictions,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
    is_local: boolean,
}

type SPExternalIds = {
    isrc: string,
    ean: string,
    upc: string
}

type SPSimplifiedAlbum = {
    album_type: string,
    total_tracks: number,
    available_markets: string[],
    external_urls: SPExternalUrls,
    href: string,
    id: string,
    images: SPImages[],
    name: string,
    release_date: string,
    release_date_precision: string,
    restrictions: SPRestrictions,
    uri: string,
    artists: SPSimplifiedArtist[]
}

type SPImages = {
    url: string,
    height: number,
    width: number
}

type SPExternalUrls = {
    spotify: string
}

type SPRestrictions = {
    reason: string
}

type SPSimplifiedArtist = {
    external_urls: SPExternalUrls,
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string
}