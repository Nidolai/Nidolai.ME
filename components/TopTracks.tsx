import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { SpotifyTopTracks } from "../lib/types";
import Track from "./Track";

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
                                <Track key={track.songUrl} {...track} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    )
}