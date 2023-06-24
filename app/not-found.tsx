export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl dark:text-white">404</h1>
            <p className="dark:text-gray-400">
                The page you are looking for does not exist.
                <br />
                Try to navigate to another page using the navigation down below.
            </p>
        </div>
    )
}