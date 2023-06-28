'use client'

import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Link from 'next/link'
import { ReadableTrack } from '../lib/types'
import { siGithub, siSpotify, siSteam, siMicrosoftoutlook } from 'simple-icons'

export interface NowPlayingResponse {
    track?: ReadableTrack | null;
    isPlaying?: boolean;
}

export default function Footer() {
    const { data, error } = useSWR<NowPlayingResponse>('/api/now-playing', fetcher)

    return (
        <footer className="flex flex-col max-w-2xl mx-auto w-full">
            <hr className="w-full border-1 border-gray-300 dark:border-gray-800 mb-4" />

            {/* Spotify */}
            <div className="flex items-center space-x-2 mb-4 mx-auto w-3/4 sm:w-full justify-center sm:justify-start">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#1ED760" d={siSpotify.path} />
                </svg>
                <div className="inline-flex sm:flex-row truncate">
                    {error ? (
                        <p className="text-gray-800 dark:text-gray-200 font-medium">
                            Failed To Load Spotify Status...
                        </p>
                    ) : (
                        <>
                            {!data ? (
                                <p className="text-gray-800 dark:text-gray-200 font-medium">
                                    Loading Spotify Status...
                                </p>
                            ) : (
                                <>
                                    {data.isPlaying ? (
                                        <a
                                            className="text-gray-800 dark:text-gray-200 font-medium max-w-max truncate"
                                            href={data.track?.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {data.track?.name}
                                        </a>
                                    ) : (
                                        <p className="text-gray-800 dark:text-gray-200 font-medium">
                                            Not Playing
                                        </p>
                                    )}
                                    <span className="mx-2 text-gray-500 dark:text-gray-300">
                                        {' – '}
                                    </span>
                                    <p className="text-gray-500 dark:text-gray-300 max-w-max truncate">
                                        {data.track?.artist ?? 'Spotify'}
                                    </p>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Links */}
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3 text-center">
                <div className="flex flex-col space-y-4 sm:text-left">
                    <Link href="/" className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition text-lg" passHref>
                        Home
                    </Link>

                    <Link href="/blog" className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition text-lg" passHref>
                        Blog
                    </Link>
                </div>

                <div className="flex flex-col space-y-4 sm:text-left">
                    <Link href="/music" className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition text-lg" passHref>
                        Music
                    </Link>
                </div>

                <div className="flex space-x-4 items-end justify-center sm:justify-end">
                    <a className="text-gray-500 hover:text-black dark:hover:text-white transition" target="_blank" rel="noopener noreferrer" href="https://github.com/Nidolai" title="GitHub" aria-label="GitHub">
                        <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={siGithub.path} />
                        </svg>
                    </a>
                    <a className="text-gray-500 hover:text-black dark:hover:text-white transition" target="_blank" rel="noopener noreferrer" href="https://steamcommunity.com/id/Nidolai" title="Steam" aria-label="Steam">
                        <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={siSteam.path} />
                        </svg>
                    </a>
                    <a className="text-gray-500 hover:text-Outlook-100 transition" href="mailto:nidolai@nidolai.me" title="Contact me" aria-label="Contact me">
                        <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={siMicrosoftoutlook.path} />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}