import { NextPage } from "next";
import Container from "../components/Container";
import TopTracks from "../components/TopTracks";

const Music: NextPage = () => {
    return (
        <Container
            subTitle = "Music"
        >
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
                <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl dark:text-white mt-5">My Tracks</h1>
                <p className="dark:text-gray-400">
                    These are my top tracks on Spotify for the last 6 months.
                    <br/>
                    Check them out by pressing the song title, you might find your new favorite song who knows.
                </p>
                <TopTracks />
            </div>
        </Container>
    )
}

export default Music