'use client'

import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { SpotifyTopTracks } from "../../lib/types";
import Image from 'next/image'

export default function TopTracks() {
    const { data, error } = useSWR<SpotifyTopTracks>('/api/top-tracks', fetcher);

    return (
        <>
            {error ? (
                <div className="mt-4 text-center">Failed To Load Spotify Tracks...</div>
            ) : (
                <>
                    {!data ? (
                        <div className="mt-4 text-center">Loading Spotify Tracks...</div>
                    ) : (
                        <div className="grid w-full grid-cols-1 gap-3 my-2 mt-4 sm:grid-cols-2">
                            {data.tracks.map((track, index) => (
                                <div className="flex flex-row text-center p-1 space-x-2 items-center" key={index}>
                                    <Image
                                        src={track.albumImageUrl}
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                        alt=""
                                    />
                                    <div className="w-3/4 truncate text-left">
                                        <a
                                            className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition font-medium"
                                            href={track.songUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {track.title}
                                        </a>
                                        <p className="text-gray-800 dark:text-gray-200">
                                            {track.artist}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    )
}