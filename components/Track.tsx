import Image from 'next/image'
import { SpotifySong } from '../lib/types';

export default function Track(track: SpotifySong) {
    return (
        <div className="border border-gray-300 dark:border-gray-800 w-full p-1">
            <div className="text-center">
                <Image
                    src={track.albumImageUrl}
                    width={64}
                    height={64}
                    className="rounded-full"
                    alt=""
                />
                <div className="truncate">
                    <a
                        className="font-medium dark:text-gray-100 truncate"
                        href={track.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {track.title}
                    </a>
                    <p
                        className="text-gray-500 truncate"
                        color="gray.500"
                    >
                        {track.artist}
                    </p>
                </div>
            </div>
        </div>
    );
}