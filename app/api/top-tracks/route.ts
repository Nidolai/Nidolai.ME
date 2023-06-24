import { getTopTracks } from 'lib/spotify'
import { SpotifySong } from 'lib/types'
import { NextResponse } from 'next/server'

export async function GET() {
    const response = await getTopTracks()
    const { items } = await response.json()

    const tracks: SpotifySong = items.slice(0, 10).map((track: any) => ({
        title: track.name,
        artist: track.artists.map((_artist: any) => _artist.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
    }))

    return NextResponse.json({
        tracks
    }, {
        status: 200
    })
}