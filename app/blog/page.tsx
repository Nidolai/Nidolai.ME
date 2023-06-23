import { Metadata } from "next";
import { allBlogs } from 'contentlayer/generated'
import Link from "next/link";

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
            {allBlogs
                .sort((a, b) => {
                    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <div className="w-full mb-8">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <h4 className="w-full mb-2 text-lg font-medium sm:text-xl dark:text-white">
                                    {post.title}
                                </h4>
                            </div>
                            <p className="dark:text-gray-400">
                                {post.summary}
                            </p>
                        </div>
                    </Link>
                ))}
        </section>
    )
}