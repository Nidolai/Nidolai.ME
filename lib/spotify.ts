import { NextResponse } from "next/server"
import { ErrorResponse, NowPlayingResponse, TopTracksResponse } from "../types/spotify"

const client_id = process.env.SPOTIFY_CLIENT_ID || ''
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || ''
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || ''

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const spotifyRequestBuilder = async <T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: Record<string, unknown>,
): Promise<T | ErrorResponse> => {
    const { access_token } = await getAccessToken();
    const response = await fetch(endpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        method,
        body: body && method !== 'GET' ? JSON.stringify(body) : undefined,
    });

    try {
        const json = await response.json();
        if (response.ok) return json as T;
        return json as ErrorResponse;
    } catch (e) {
        return {
            error: {
                message: response.statusText || 'Server error',
                status: response.status || 500,
            },
        };
    }
};

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: `POST`,
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token
        })
    })

    return response.json()
}

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
export const getNowPlaying = async () => spotifyRequestBuilder<NowPlayingResponse>(NOW_PLAYING_ENDPOINT)

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
export const getTopTracks = async () => spotifyRequestBuilder<TopTracksResponse>(TOP_TRACKS_ENDPOINT)


export const spotifyResponse = (data: unknown) =>
    NextResponse.json(data, {
        headers: {
            'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
    });