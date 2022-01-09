import Head from 'next/head'
import { useRouter } from 'next/router';
import Footer from './Footer'
import ThemeSwitcher from './ThemeSwitcher';

export default function Container(props: any) {
    const { children, ...customMeta } = props;

    const router = useRouter();

    const meta = {
        title: 'Nidolai | Nicolai',
        description: 'Passionate DevOps Engineer from Denmark',
        type: 'website',
        image: 'https://nidolai.me/avatar/Avatar-255x255.png',
        ...customMeta
    }

    return (
        <>
            <Head>
                <title>{meta.title} - {meta.subTitle}</title>
                <meta name="description" content={meta.description} />

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
        </>
    )
}