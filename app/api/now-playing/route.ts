import { getNowPlaying, spotifyResponse } from 'lib/spotify'
import { ReadableTrack, Track } from 'lib/types'

export const runtime = 'edge';
export const fetchCache = 'force-no-store';

const trackToReadableTrack = (track?: Track | null): ReadableTrack | null => {
    if (!track) return null;
    try {
        const preAlbumImage = track.album.images.pop();
        const albumImage = track.album.images.pop() || preAlbumImage;
        return {
            name: track.name,
            artist: track.artists.map((_artist) => _artist.name).join(', '),
            album: track.album.name,
            previewUrl: track.preview_url,
            url: track.external_urls.spotify,
            image: albumImage,
        };
    } catch (e) {
        return null;
    }
};

export async function GET() {
    const nowPlaying = await getNowPlaying().catch(null)
    let isPlaying = false
    let nowPlayingTrack: Track | null = null;

    if (!('error' in nowPlaying)) {
        nowPlayingTrack = nowPlaying.item;
        isPlaying = nowPlaying.is_playing || false;
    }

    if (nowPlayingTrack) {
        return spotifyResponse({
            track: trackToReadableTrack(nowPlayingTrack),
            isPlaying
        })
    }
}