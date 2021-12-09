export type SpotifyNowPlayingSong = {
    isPlaying: boolean;
    title: string;
    artist: string;
    album: string;
    albumImageUrl: string;
    songUrl: string;
}

export type SpotifySong = {
    title: string;
    artist: string;
    album: string;
    albumImageUrl: string;
    songUrl: string;
};

export type SpotifyTopTracks = {
    tracks: SpotifySong[];
};