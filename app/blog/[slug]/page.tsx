import { allBlogs } from 'contentlayer/generated'
import Link from 'next/link';
import Image from "next/image";
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { MDX } from 'components/MDX';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function generateStaticParams() {
    return allBlogs.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    { params }: any
): Promise<Metadata | undefined> {
    const post = allBlogs.find((post) => post.slug === params.slug);
    if (!post) {
        return;
    }

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        slug,
    } = post;

    const ogImage = '/avatar/Avatar-255x255.png'

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `https://nidolai.me/blog/${slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default async function Blog({ params }: any) {
    const post = allBlogs.find((post) => post.slug === params.slug);
    const editUrl = (slug: string) =>
        `https://github.com/Nidolai/Nidolai.ME/edit/main/_posts/${slug}.mdx`;

    if (!post) {
        notFound()
    }

    return (
        <section className="flex flex-col items-start justify-center w-full max-w-2xl mt-4">
            <div className="flex space-x-2 items-center mb-4">
                <Link href="/blog" className="text-gray-500 hover:text-black dark:hover:text-white transition pt-1 sm:pt-2" title="Back" aria-label="Back" passHref>
                    <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                        <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
                    </svg>
                </Link>

                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-white">
                    {post.title}
                </h1>
            </div>
            <div className="flex flex-col items-start space-y-1 justify-between w-full mb-4 sm:flex-row sm:items-center sm:space-y-0">
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

            <MDX code={post.body.code} />

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
        </section>
    )
}