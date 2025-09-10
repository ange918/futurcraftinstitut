import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../src/components/sections/footer'
import { Navbar, NavBody, NavItems, NavbarButton, NavbarLogo, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from '../src/components/ui/resizable-navbar'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'FuturCraft Institut - Formation IT et Numérique',
    description: 'Centre de formation privé spécialisé en informatique, développement web, IA et technologies numériques.',
}

const navItems = [
    { name: 'À propos', link: '/about' },
    { name: 'Formations', link: '/formation' },
    { name: 'Blog', link: '/blog' },
]

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
                <Navbar className="fixed top-0">
                    <NavBody>
                        <NavbarLogo />
                        <NavItems items={navItems} />
                        <div className="flex items-center gap-4">
                            <NavbarButton href="/brochure" variant="secondary">
                                Brochure
                            </NavbarButton>
                            <NavbarButton href="/portes-ouvertes" variant="primary">
                                Portes Ouvertes
                            </NavbarButton>
                            <NavbarButton href="/candidater" variant="dark">
                                Candidater
                            </NavbarButton>
                        </div>
                    </NavBody>
                </Navbar>
                {children}
                <Footer />
            </body>
        </html>
    )
}
