import type { NextPage } from 'next'
import Container from "../components/Container";
import TopTracks from "../components/TopTracks";

const Music: NextPage = () => {
    return (
        <Container
            title="Music"
        >
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
                <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl dark:text-white">My Tracks</h1>
                <p className="dark:text-gray-400">
                    These are currently some of the top tracks I jam out to on Spotify.
                    You can check them out by pressing the song title, you might end up finding your new favorite song who knows?
                </p>
                <TopTracks />
            </div>
        </Container>
    )
}

export default Music