'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
    Navbar, 
    NavBody, 
    NavItems, 
    NavbarButton, 
    NavbarLogo, 
    MobileNav, 
    MobileNavHeader, 
    MobileNavToggle, 
    MobileNavMenu 
} from './resizable-navbar'

const navItems = [
    { name: 'À propos', link: '/about' },
    { name: 'Formations', link: '/formation' },
    { name: 'Blog', link: '/blog' },
]

export default function NavbarWrapper() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <Navbar className="fixed top-0">
            {/* Navigation Desktop */}
            <NavBody>
                {({ visible }: { visible: boolean }) => (
                    <>
                        <NavbarLogo />
                        <NavItems items={navItems} visible={visible} />
                        <motion.div 
                            className="flex items-center flex-shrink-0" 
                            animate={{
                                gap: visible ? "0.25rem" : "1rem",
                                scale: visible ? 0.8 : 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 50,
                            }}
                        >
                            <NavbarButton href="/brochure" variant="secondary" visible={visible}>
                                Brochure
                            </NavbarButton>
                            <NavbarButton href="/portes-ouvertes" variant="primary" visible={visible}>
                                Portes Ouvertes
                            </NavbarButton>
                            <NavbarButton href="/candidater" variant="dark" visible={visible}>
                                Candidater
                            </NavbarButton>
                        </motion.div>
                    </>
                )}
            </NavBody>

            {/* Navigation Mobile */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle 
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>
                <MobileNavMenu 
                    isOpen={isMobileMenuOpen} 
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="block w-full py-2 text-left text-neutral-600 hover:text-neutral-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 mt-4">
                        <a
                            href="/brochure"
                            className="px-4 py-2 bg-transparent text-black text-sm font-bold hover:bg-gray-100 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Brochure
                        </a>
                        <a
                            href="/portes-ouvertes"
                            className="px-4 py-2 bg-white text-black text-sm font-bold rounded-md shadow-lg border hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Portes Ouvertes
                        </a>
                        <a
                            href="/candidater"
                            className="px-4 py-2 bg-black text-white text-sm font-bold rounded-md hover:bg-gray-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Candidater
                        </a>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    )
}