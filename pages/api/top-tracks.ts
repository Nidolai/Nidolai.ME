import { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../lib/spotify";
import { SpotifySong } from "../../lib/types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks: SpotifySong = items.slice(0, 10).map((track: any) => ({
        title: track.name,
        artist: track.artists.map((_artist: any) => _artist.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
    }));

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.status(200).json({ tracks });
}