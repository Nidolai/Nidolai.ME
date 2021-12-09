import Head from 'next/head'
import { useRouter } from 'next/router';
import Footer from './Footer'
import ThemeSwitcher from './ThemeSwitcher';

export default function Container(props: any) {
    const { children, ...customMeta } = props;

    const router = useRouter();

    const meta = {
        title: 'Nidolai | Nicolai',
        description: 'DevOps Engineer',
        type: 'website',
        image: 'https://nidolai.me/icon.png',
        ...customMeta
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 flex flex-col px-3">
            <Head>
                <title>{meta.title} - {meta.subTitle}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph Card */}
                <meta property="og:url" content={`https://nidolai.me${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Nidolai" />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary" />
            </Head>
            <main className="flex flex-auto justify-center">
                <ThemeSwitcher />
                {children}
            </main>
            <Footer />
        </div>
    )
}