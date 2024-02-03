import { getTopTracks, spotifyResponse } from 'lib/spotify'
import { ReadableTrack, Track } from 'types/spotify'

export const runtime = 'edge';
export const fetchCache = 'force-no-store';

const tracksToReadableTracks = (track?: Track[] | null): ReadableTrack[] | null => {
    if (!track) return null;
    try {
        return track.slice(0, 10).map((track: Track) => ({
            name: track.name,
            artist: track.artists.map((_artist) => _artist.name).join(', '),
            album: track.album.name,
            previewUrl: track.preview_url,
            url: track.external_urls.spotify,
            image: track.album.images.pop(),
        }))
    } catch (e) {
        return null;
    }
};

export async function GET() {
    const topTracks = await getTopTracks().catch(null);
    const isError = 'error' in topTracks;

    const currentTopTracks = !isError ? tracksToReadableTracks(topTracks.items) : null;

    return spotifyResponse({
        tracks: currentTopTracks
    })
}