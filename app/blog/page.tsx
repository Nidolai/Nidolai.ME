import { Metadata } from 'next'
import { allBlogs } from 'contentlayer/generated'
import Posts from 'components/Posts'

export const metadata: Metadata = {
    title: 'Blog'
}

export default async function BlogPage() {
    return (
        <section className="flex flex-col items-start justify-center max-w-2xl mx-auto">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl dark:text-white">Blog</h1>
            <p className="dark:text-gray-400 mb-4">
                Welcome to my new blog, here I'll mostly write about tech and other cool projects I'm currently working on. In total, I've written {allBlogs.length} articles.
            </p>
            <Posts />
        </section>
    )
}