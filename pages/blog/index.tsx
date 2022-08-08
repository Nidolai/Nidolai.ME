import type { InferGetStaticPropsType, NextPage } from 'next'
import BlogPost from '../../components/Blog/BlogPost'
import Container from '../../components/Container'
import { allPosts } from 'contentlayer/generated'
import { pick } from 'contentlayer/client'
import { useState } from 'react'

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [searchValue, setSearchValue] = useState('');
    const filteredBlogPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <Container title="Blog">
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
                <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl dark:text-white">Blog</h1>
                <p className="dark:text-gray-400 mb-4">
                    Welcome to my new blog, here I'll mostly write about tech and other cool projects I'm currently working on. In total, I've written {allPosts.length} articles.
                </p>
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
                {filteredBlogPosts.map((post: any, idx: number) => (
                    <BlogPost key={idx} {...post} />
                ))}
            </div>
        </Container>
    )
}

export default Blog

export async function getStaticProps() {
    const posts = allPosts.map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt'])).sort(
        (a, b) =>
            Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
    return { props: { posts } }
}
