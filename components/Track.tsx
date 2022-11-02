import Image from 'next/image'
import { SpotifySong } from '../lib/types';

export default function Track(track: SpotifySong) {
    return (
        <div className="flex flex-row text-center p-1 space-x-2 items-center">
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
    );
}