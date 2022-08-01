export type SpotifySong = {
    title: string;
    artist: string;
    album: string;
    albumImageUrl: string;
    songUrl: string;
};

export type SpotifyNowPlayingSong = SpotifySong & {
    isPlaying: boolean;
}

export type SpotifyTopTracks = {
    tracks: SpotifySong[];
};