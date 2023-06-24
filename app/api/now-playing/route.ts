import { getNowPlaying } from 'lib/spotify'
import { SpotifyNowPlayingSong } from 'lib/types'
import { NextResponse } from 'next/server'

export async function GET() {
    const response = await getNowPlaying()

    if (response.status === 204 || response.status > 400) {
        return NextResponse.json({ isPlaying: false }, { status: 200 })
    }

    const song = await response.json()

    if (song.item === null) {
        return NextResponse.json({ isPlaying: false }, { status: 200 })
    }

    const isPlaying = song.is_playing
    const title = song.item.name
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ')
    const album = song.item.album.name
    const albumImageUrl = song.item.album.images[0].url
    const songUrl = song.item.external_urls.spotify

    return NextResponse.json(<SpotifyNowPlayingSong>{
        isPlaying,
        title,
        artist,
        album,
        albumImageUrl,
        songUrl
    }, {
        status: 200
    })
}