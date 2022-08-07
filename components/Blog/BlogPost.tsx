import type { Post } from "contentlayer/types";
import Link from "next/link";

export default function BlogPost({
    title,
    summary,
    slug
}: Pick<Post, 'title' | 'summary' | 'slug'>) {
    return (
        <Link href={`/blog/${slug}`}>
            <a className="w-full">
                <div className="w-full mb-8">
                    <div className="flex flex-col justify-between md:flex-row">
                        <h4 className="w-full mb-2 text-lg font-medium md:text-xl dark:text-white">
                            {title}
                        </h4>
                    </div>
                    <p className="dark:text-gray-400">
                        {summary}
                    </p>
                </div>
            </a>
        </Link>
    )
}