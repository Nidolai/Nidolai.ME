import Container from "components/Container";
import type { Post } from "contentlayer/types";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { PropsWithChildren } from "react";

const editUrl = (slug: string) =>
    `https://github.com/Nidolai/Nidolai.ME/edit/main/_posts/${slug}.mdx`;

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Post }>) {
    return (
        <Container title={`${post.title}`} description={post.summary} date={new Date(post.publishedAt).toISOString()} type="article">
            <article className="flex flex-col items-start justify-center w-full max-w-2xl mt-4">
                <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl dark:text-white">
                    {post.title}
                </h1>
                <div className="flex flex-col items-start justify-between w-full mb-4 sm:flex-row sm:items-center">
                    <div className="flex items-center">
                        <Image
                            alt="Nicolai"
                            height={24}
                            width={24}
                            src="/avatar/Avatar-64x64.png"
                            className="rounded-full"
                        />
                        <p className="ml-2 text-sm dark:text-gray-400">
                            <a className="text-gray-500 hover:text-black dark:hover:text-white transition" target="_blank" rel="noopener noreferrer" href="https://github.com/Nidolai" title="GitHub" aria-label="GitHub">
                                {'Nicolai'}
                            </a>
                            {' / '}
                            {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                        </p>
                    </div>

                    <p className="text-sm dark:text-gray-400">
                        {post.readingTime.text}
                    </p>
                </div>

                <div className="w-full max-w-none mb-2 prose dark:prose-invert">
                    {children}
                </div>

                <div className="flex w-full mb-2 justify-end">
                    <a
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition text-sm"
                        href={editUrl(post.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Edit on GitHub'}
                    </a>
                </div>
            </article>
        </Container>
    )
}