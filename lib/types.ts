// API responses
export interface ErrorResponse {
    error: {
        status: number;
        message: string;
    };
}

export interface TopTracksResponse {
    items: Track[];
}

export interface NowPlayingResponse {
    is_playing: boolean;
    item: Track;
}

// interfaces and types for data returned by API's
export type SpotifyEntityType = 'album' | 'artist' | 'playlist' | 'track';
export type SpotifyEntityUri = `spotify:${SpotifyEntityType}:${string}`;

export interface Image {
    url: string;
    height?: number | null;
    width?: number | null;
}

export interface SpotifyEntity {
    id: string;
    name: string;
    href: string;
    uri: SpotifyEntityUri;
    type: SpotifyEntityType;
    images: Array<Image>;
    external_urls: { spotify: string };
}

interface Album extends SpotifyEntity {
    type: 'album';
    popularity: number;
}

interface Artist extends SpotifyEntity {
    type: 'artist';
    popularity: number;
}

export interface Track extends SpotifyEntity {
    type: 'track';
    popularity: number;
    duration_ms: number;
    album: Album;
    artists: Array<Artist>;
    preview_url: string;
    is_playable: boolean;
    is_local: boolean;
}

export interface ReadableTrack {
    name: string;
    artist: string;
    album: string;
    previewUrl: string;
    url: string;
    image?: Image;
}