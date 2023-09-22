'use client'

import { Blog, allBlogs } from 'contentlayer/generated'
import Link from 'next/link'
import { useState } from 'react'

function Post({ slug, title, summary }: Blog) {
    return (
        <Link key={slug} href={`/blog/${slug}`}>
            <div className="w-full mb-8">
                <div className="flex flex-col justify-between sm:flex-row">
                    <h4 className="w-full mb-2 text-lg font-medium sm:text-xl dark:text-white">
                        {title}
                    </h4>
                </div>
                <p className="dark:text-gray-400">
                    {summary}
                </p>
            </div>
        </Link>
    )
}

export default function Posts() {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = allBlogs.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <>
            <div className="w-full mb-4">
                <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    aria-label="Search articles"
                    type="text"
                    placeholder="Search articles"
                    className="block w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100" />
            </div>
            {!filteredBlogPosts.length && (
                <p className="dark:text-gray-400">
                    No posts found.
                </p>
            )}
            {filteredBlogPosts
                .sort((a, b) => {
                    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                        return -1
                    }
                    return 1
                })
                .map((post: Blog, idx: number) => (
                    <Post key={idx} {...post} />
                ))}
        </>
    )
}