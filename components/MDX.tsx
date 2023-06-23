import { useMDXComponent } from 'next-contentlayer/hooks';

interface MDXProps {
    code: string
}

export function MDX({ code }: MDXProps) {
    const Component = useMDXComponent(code);

    return (
        <article className="w-full max-w-none mb-4 prose dark:prose-invert">
            <Component />
        </article>
    );
}