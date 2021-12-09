import { NextPage } from "next";
import Container from "../components/Container";
import TopTracks from "../components/TopTracks";

const Custom500: NextPage = () => {
    return (
        <Container
            subTitle = "500"
        >
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
                <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl dark:text-white mt-5">404</h1>
                <p className="dark:text-gray-400">
                    The page is having some difficulties right now.
                    <br/>
                    Please try to visit the page again in a few minutes, to see if the issue is resolved.
                </p>
            </div>
        </Container>
    )
}

export default Custom500