'use client'

import { motion } from 'framer-motion'
import { Navbar, NavBody, NavItems, NavbarButton, NavbarLogo } from './resizable-navbar'

const navItems = [
    { name: 'À propos', link: '/about' },
    { name: 'Formations', link: '/formation' },
    { name: 'Blog', link: '/blog' },
]

export default function NavbarWrapper() {
    return (
        <Navbar className="fixed top-0">
            <NavBody>
                {({ visible }: { visible: boolean }) => (
                    <>
                        <NavbarLogo />
                        <NavItems items={navItems} visible={visible} />
                        <motion.div 
                            className="flex items-center" 
                            animate={{
                                gap: visible ? "0.25rem" : "1rem",
                                scale: visible ? 0.75 : 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 50,
                            }}
                        >
                            {visible ? (
                                // Version compacte quand rétréci
                                <>
                                    <NavbarButton href="/brochure" variant="secondary" visible={visible}>
                                        B
                                    </NavbarButton>
                                    <NavbarButton href="/portes-ouvertes" variant="primary" visible={visible}>
                                        PO
                                    </NavbarButton>
                                    <NavbarButton href="/candidater" variant="dark" visible={visible}>
                                        C
                                    </NavbarButton>
                                </>
                            ) : (
                                // Version normale
                                <>
                                    <NavbarButton href="/brochure" variant="secondary" visible={visible}>
                                        Brochure
                                    </NavbarButton>
                                    <NavbarButton href="/portes-ouvertes" variant="primary" visible={visible}>
                                        Portes Ouvertes
                                    </NavbarButton>
                                    <NavbarButton href="/candidater" variant="dark" visible={visible}>
                                        Candidater
                                    </NavbarButton>
                                </>
                            )}
                        </motion.div>
                    </>
                )}
            </NavBody>
        </Navbar>
    )
}