import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../src/components/sections/footer'
import NavbarWrapper from '../src/components/ui/navbar-wrapper'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'FuturCraft Institut - Formation IT et Numérique',
    description: 'Centre de formation privé spécialisé en informatique, développement web, IA et technologies numériques.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className={`${inter.variable} antialiased`}>
                <NavbarWrapper />
                {children}
                <Footer />
            </body>
        </html>
    )
}
