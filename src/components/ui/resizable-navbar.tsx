'use client'
import { cn } from '@/lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from 'motion/react'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode, MouseEvent } from 'react'

const formations = [
    {
        name: 'Développement Web Fullstack',
        link: '/formation/developpement-web',
    },
    { name: 'Webmaster', link: '/formation/webmaster' },
    {
        name: 'Photo, cadrage et montage',
        link: '/formation/photo-cadrage-montage',
    },
    { name: 'Graphisme & Web Design', link: '/formation/graphisme-web-design' },
    { name: 'Secrétariat & Caisse', link: '/formation/secretariat-caisse' },
    { name: 'Marketing Digital', link: '/formation/marketing-digital' },
    {
        name: 'Graphisme et Sérigraphie',
        link: '/formation/graphisme-serigraphie',
    },
    { name: 'Développement IA', link: '/formation/developpement-ia' },
    { name: 'Maîtrise IA', link: '/formation/maitrise-ia' },
    {
        name: 'Maintenance Informatique & Réseau',
        link: '/formation/maintenance-informatique-reseau',
    },
    { name: 'Copywriting', link: '/formation/copywriting' },
    { name: 'E-commerce', link: '/formation/e-commerce' },
    { name: 'Pilotage de drone', link: '/formation/pilotage-drone' },
    { name: 'Trading', link: '/formation/trading' },
]

const navItems = [
    { name: 'À propos', link: '/about' },
    { name: 'Formations', link: '/formation', submenu: formations },
    { name: 'Blog', link: '/blog' },
]

export const Navbar: React.FC<{
    children: ReactNode
    className?: string
}> = ({ children, className }: { children: ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })
    const [visible, setVisible] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest: number) => {
        setVisible(latest > 100)
    })

    return (
        <motion.div
            ref={ref}
            className={cn('fixed inset-x-0 top-0 z-50 w-full', className)}>
            {React.Children.map(children, (child: ReactNode) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                          child as React.ReactElement<{ visible?: boolean }>,
                          { visible }
                      )
                    : child
            )}
        </motion.div>
    )
}

export const NavBody: React.FC<{
    children: ReactNode
    className?: string
    visible?: boolean
}> = ({
    children,
    className,
    visible,
}: {
    children: ReactNode
    className?: string
    visible?: boolean
}) => (
    <motion.div
        animate={{
            backdropFilter: visible ? 'blur(10px)' : 'none',
            boxShadow: visible
                ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                : 'none',
            width: '100%',
            y: visible ? 10 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}
        style={{ minWidth: '800px' }}
        className={cn(
            'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-3xl bg-white/80 px-4 md:px-6 lg:px-8 py-2 md:flex border border-secondary',
            visible && 'bg-white/90 shadow-lg',
            className
        )}>
        {children}
    </motion.div>
)

export const NavItems: React.FC<{
    items: { name: string; link: string; submenu?: any[] }[]
    className?: string
    onItemClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}> = ({ items, className, onItemClick }) => {
    const [hovered, setHovered] = useState<number | null>(null)
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)
    const submenuRef = useRef<HTMLDivElement>(null)

    // Fermer le sous-menu si on clique ailleurs
    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (
                submenuRef.current &&
                !submenuRef.current.contains(event.target as Node)
            ) {
                setOpenSubmenu(null)
            }
        }
        if (openSubmenu !== null) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [openSubmenu])

    return (
        <nav
            className={cn(
                'flex flex-row items-center gap-6 relative',
                className
            )}>
            {items.map((item, idx) => (
                <div
                    key={item.name}
                    className="relative"
                    ref={item.submenu ? submenuRef : undefined}>
                    {item.submenu ? (
                        <>
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenSubmenu(
                                        openSubmenu === idx ? null : idx
                                    )
                                }
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                                className="relative px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground focus:outline-none after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-[var(--secondary)] hover:after:w-8 after:transition-all after:duration-300">
                                {item.name}
                            </button>
                            <AnimatePresence>
                                {openSubmenu === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute left-0 top-full mt-2 w-72 bg-white dark:bg-neutral-900 text-black dark:text-[#0a0a1a] rounded-xl shadow-2xl z-[9999] border-2 border-secondary p-3">
                                        {item.submenu.map((sub, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                href={sub.link}
                                                className="block px-4 py-2 text-base text-black dark:text-[#0a0a1a] hover:bg-secondary/10 rounded font-medium"
                                                onClick={onItemClick}>
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </>
                    ) : (
                        <Link
                            href={item.link}
                            onMouseEnter={() => setHovered(idx)}
                            onClick={onItemClick}
                            className="relative px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-[var(--secondary)] hover:after:w-8 after:transition-all after:duration-300">
                            <span className="relative z-20">{item.name}</span>
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    )
}

export const NavbarLogo: React.FC = () => {
    return (
        <Link
            href="/"
            className="relative z-20 mr-4 flex items-center px-2 py-1">
            <Image
                src="/image/Logo-ENTIERE-768x516.webp"
                alt="FuturCraft Institut"
                width={120}
                height={80}
                className="h-8 w-auto md:h-10 lg:h-12"
                priority
            />
        </Link>
    )
}

export const NavbarButton: React.FC<{
    href?: string
    as?: React.ElementType
    children: ReactNode
    className?: string
    variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
}> = ({
    href,
    as: Tag = 'a',
    children,
    className,
    variant = 'primary',
    ...props
}) => {
    const baseStyles =
        'px-6 py-2 rounded-full font-bold text-lg relative cursor-pointer transition duration-200 inline-block text-center shadow-md'
    const variantStyles = {
        primary:
            'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]',
        secondary:
            'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary-hover)]',
        dark: 'bg-card text-card-foreground border-2 border-white hover:bg-white hover:text-black',
        gradient:
            'bg-gradient-to-b from-primary to-primary/80 text-primary-foreground',
    }
    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}>
            {children}
        </Tag>
    )
}

export const MobileNav: React.FC<{
    children: ReactNode
    className?: string
    visible?: boolean
}> = ({
    children,
    className,
    visible,
}: {
    children: ReactNode
    className?: string
    visible?: boolean
}) => (
    <motion.div
        animate={{
            backdropFilter: visible ? 'blur(10px)' : 'none',
            boxShadow: visible
                ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                : 'none',
            width: visible ? '90%' : '100%',
            y: visible ? 10 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}
        className={cn(
            'relative z-50 flex w-full flex-col items-center justify-between md:hidden',
            className
        )}>
        <div
            className={cn(
                'w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-4 py-1 border-b border-secondary bg-white',
                visible && 'bg-white shadow-lg',
            )}
            style={{ boxSizing: 'border-box' }}
        >
            {children}
        </div>
    </motion.div>
)

export const MobileNavHeader: React.FC<{
    children: ReactNode
    className?: string
}> = ({ children, className }: { children: ReactNode; className?: string }) => (
    <div
        className={cn(
            'flex w-full flex-row items-center justify-between',
            className
        )}>
        {children}
    </div>
)

export const MobileNavMenu: React.FC<{
    children: ReactNode
    className?: string
    isOpen: boolean
    onClose: () => void
}> = ({
    children,
    className,
    isOpen,
    onClose,
}: {
    children: ReactNode
    className?: string
    isOpen: boolean
    onClose: () => void
}) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                    'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-lg border border-secondary dark:bg-neutral-950 max-w-7xl mx-auto',
                    className
                )}>
                {children}
            </motion.div>
        )}
    </AnimatePresence>
)

export const MobileNavToggle: React.FC<{
    isOpen: boolean
    onClick: () => void
}> = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) =>
    isOpen ? (
        <IconX className="text-black dark:text-white" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
    )

// --- Composant principal Header ---
const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openFormation, setOpenFormation] = useState(false)

    return (
        <Navbar>
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                {/* Zone boutons alignée et espacée */}
                <div className="flex items-center gap-3 md:gap-4 lg:gap-6 ms-4 md:ms-8">
                    <NavbarButton 
                        href="/brochure-futurcraft.pdf" 
                        variant="secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        Brochure
                    </NavbarButton>
                    <NavbarButton 
                        href="/#portes-ouvertes" 
                        variant="primary"
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById('portes-ouvertes')
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' })
                            } else {
                                window.location.href = '/#portes-ouvertes'
                            }
                        }}
                    >
                        Portes Ouvertes
                    </NavbarButton>
                    <NavbarButton href="/candidater" variant="dark">
                        Candidater
                    </NavbarButton>
                </div>
            </NavBody>
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
                    onClose={() => setIsMobileMenuOpen(false)}>
                    {navItems.map((item: any, idx: number) =>
                        item.submenu ? (
                            <div key={item.name} className="w-full">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenFormation(open => !open)
                                    }
                                    className="block w-full text-left font-bold text-lg mb-2 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/10 rounded">
                                    {item.name}
                                </button>
                                {openFormation && (
                                    <div className="pl-4">
                                        {item.submenu.map(
                                            (sub: any, subIdx: number) => (
                                                <a
                                                    key={subIdx}
                                                    href={sub.link}
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                    className="block px-4 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-secondary/10 rounded">
                                                    {sub.name}
                                                </a>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/10 rounded">
                                {item.name}
                            </a>
                        )
                    )}
                    <div className="flex w-full flex-col gap-4 pt-4">
                        <NavbarButton
                            href="/brochure-futurcraft.pdf"
                            variant="secondary"
                            className="w-full"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            Brochure
                        </NavbarButton>
                        <NavbarButton
                            href="/#portes-ouvertes"
                            variant="primary"
                            className="w-full"
                            onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById('portes-ouvertes')
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' })
                                } else {
                                    window.location.href = '/#portes-ouvertes'
                                }
                            }}
                        >
                            Portes Ouvertes
                        </NavbarButton>
                        <NavbarButton
                            href="/candidater"
                            variant="dark"
                            className="w-full">
                            Candidater
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    )
}

export default Header
