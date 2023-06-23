import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import { Providers } from "./providers"
import Footer from "components/Footer"
import ThemeSwitcher from "components/ThemeSwitcher"

import '../styles/globals.css'

export const metadata: Metadata = {
    title: {
        template: '%s | Nidolai',
        default: 'Nidolai'
    },
    description: 'Passionate DevOps Engineer from Denmark',
    openGraph: {
        title: 'Nidolai',
        description: 'Passionate DevOps Engineer from Denmark',
        type: 'website',
        url: `https://nidolai.me`,
        siteName: 'Nidolai',
        images: [
            {
                url: 'https://nidolai.me/avatar/Avatar-255x255.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nidolai',
    },
    icons: {
        shortcut: '/favicon.ico'
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <body>
                <Providers>
                    <main className="flex flex-auto justify-center px-2">
                        <ThemeSwitcher />
                        {children}
                        <Analytics />
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}