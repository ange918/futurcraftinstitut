'use client'
import { cn } from '@/lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from 'motion/react'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

interface NavbarProps {
    children: React.ReactNode
    className?: string
}

interface NavBodyProps {
    children: React.ReactNode
    className?: string
    visible?: boolean
}

interface NavItemsProps {
    items: {
        name: string
        link: string
    }[]
    className?: string
    onItemClick?: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })
    const [visible, setVisible] = useState<boolean>(false)

    useMotionValueEvent(scrollY, 'change', latest => {
        if (latest > 100) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    })

    return (
        <motion.div
            ref={ref}
            className={cn('fixed inset-x-0 top-4 z-50 w-full', className)}>
            {React.Children.map(children, child =>
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

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? 'blur(10px)' : 'none',
                boxShadow: visible
                    ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                    : 'none',
                width: visible ? '90%' : '100%',
                y: visible ? 10 : 0,
                height: visible ? 56 : 80, // Ajout : hauteur réduite si visible (scroll), grande sinon
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: '800px',
            }}
            className={cn(
                'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-3xl bg-transparent px-3 py-1 md:flex dark:bg-transparent border border-secondary',
                'lg:flex', // visible sur lg+
                'md:flex', // visible sur md+
                'sm:hidden', // caché sur mobile
                visible && 'bg-white/80 dark:bg-neutral-950/80',
                className,
                'transition-all duration-300' // Ajout pour transition douce
            )}>
            {children}
        </motion.div>
    )
}

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
]

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null)
    const [formationsOpen, setFormationsOpen] = useState(false)

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-6 text-lg font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-6',
                className
            )}>
            {items.map((item, idx) => (
                <div key={`link-${idx}`} className="relative">
                    {item.name === 'Formations' ? (
                        <button
                            onMouseEnter={() => setHovered(idx)}
                            onClick={() => setFormationsOpen(!formationsOpen)}
                            className="relative px-4 py-2 text-muted-foreground hover:text-foreground">
                            <span className="relative z-20 text-lg">
                                {item.name}
                            </span>
                        </button>
                    ) : (
                        <Link
                            href={item.link}
                            onMouseEnter={() => setHovered(idx)}
                            onClick={onItemClick}
                            className="relative px-4 py-2 text-muted-foreground hover:text-foreground">
                            {hovered === idx && (
                                <motion.div
                                    layoutId="hovered"
                                    className="absolute inset-0 h-full w-full rounded-full bg-accent"
                                />
                            )}
                            <span className="relative z-20 text-lg">
                                {item.name}
                            </span>
                        </Link>
                    )}
                    {/* Sous-menu des formations style burger */}
                    {item.name === 'Formations' && formationsOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            className="absolute top-full left-0 mt-3 w-72 bg-card border border-border rounded-xl shadow-2xl z-50 overflow-hidden">
                            <div className="p-1">
                                {/* En-tête avec icône de retour */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                                    <span className="text-sm font-medium text-foreground">
                                        Nos Formations
                                    </span>
                                    <button
                                        onClick={() => setFormationsOpen(false)}
                                        className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2">
                                            <path d="M18 6L6 18M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                {formations.map((formation, formationIdx) => (
                                    <Link
                                        key={formation.link}
                                        href={formation.link}
                                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 mx-1"
                                        onClick={() =>
                                            setFormationsOpen(false)
                                        }>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="font-medium">
                                                {formation.name}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            ))}
        </motion.div>
    )
}

export const MobileNav = ({
    children,
    className,
    visible,
}: {
    children: React.ReactNode
    className?: string
    visible?: boolean
}) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? 'blur(10px)' : 'none',
                boxShadow: visible
                    ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                    : 'none',
                width: visible ? '90%' : '100%',
                y: visible ? 10 : 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: '800px',
            }}
            className={cn(
                'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-1 md:hidden border border-secondary rounded-3xl',
                'sm:flex', // visible sur mobile
                'md:hidden', // caché sur md+
                visible && 'bg-white/80 dark:bg-neutral-950/80',
                className
            )}>
            {children}
        </motion.div>
    )
}

export const MobileNavHeader = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div
            className={cn(
                'flex w-full flex-row items-center justify-between',
                className
            )}>
            {children}
        </div>
    )
}

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onCloseAction,
}: {
    children: React.ReactNode
    className?: string
    isOpen: boolean
    onCloseAction: () => void
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950',
                        className
                    )}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export const MobileNavToggle = ({
    isOpen,
    onClickAction,
}: {
    isOpen: boolean
    onClickAction: () => void
}) => {
    return isOpen ? (
        <IconX className="text-black dark:text-white" onClick={onClickAction} />
    ) : (
        <IconMenu2
            className="text-black dark:text-white"
            onClick={onClickAction}
        />
    )
}

export const NavbarButton = ({
    href,
    as: Tag = 'a',
    children,
    className,
    variant = 'primary',
    ...props
}: {
    href?: string
    as?: React.ElementType
    children: React.ReactNode
    className?: string
    variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
} & (
    | React.ComponentPropsWithoutRef<'a'>
    | React.ComponentPropsWithoutRef<'button'>
)) => {
    const baseStyles =
        'px-6 py-3 rounded-md bg-primary text-primary-foreground text-lg font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-md'

    const variantStyles = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        dark: 'bg-card text-card-foreground hover:bg-card/90',
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

export const NavbarLogo = () => {
    return (
        <a href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
            <div className="flex items-center gap-2">
                <Image
                    src="/image/Logo-ENTIERE-768x516.webp"
                    alt="FuturCraft Institut"
                    width={120}
                    height={80}
                    className="h-8 w-auto md:h-10 lg:h-12"
                />
            </div>
        </a>
    )
}

const navItems = [
    { name: 'À propos', link: '/about' },
    { name: 'Formations', link: '/formation' },
    { name: 'Blog', link: '/blog' },
]

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody className="relative z-[9999]">
                <div className="flex items-center justify-between w-full">
                    {/* Logo à gauche */}
                    <div className="flex-shrink-0">
                        <NavbarLogo />
                    </div>
                    {/* Liens centrés */}
                    <div className="flex items-center gap-2 md:gap-4 mx-auto">
                        <Link
                            href="/about"
                            className="relative text-lg font-medium text-muted-foreground hover:text-foreground px-4 py-2 transition-colors after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                            À propos
                        </Link>
                        <NavItems
                            items={[{ name: 'Formations', link: '/formation' }]}
                            className=""
                        />
                        <Link
                            href="/blog"
                            className="relative z-[9999] text-lg font-medium text-muted-foreground hover:text-foreground px-4 py-2 transition-colors after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                            Blog
                        </Link>
                        {/* Bouton Brochure */}
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#1a093e] text-white font-bold text-lg shadow-md border-2 border-[#1a093e] hover:bg-[#2a0a5c] transition">
                            <FiDownload className="text-xl" />
                            Brochure
                        </a>
                        {/* Bouton Portes Ouvertes */}
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500 text-white font-bold text-lg shadow-md border-2 border-orange-500 hover:bg-orange-600 transition">
                            Portes Ouvertes
                            <FiArrowRight className="text-xl" />
                        </a>
                        <NavbarButton
                            variant="dark"
                            className="flex items-center gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-6 py-2 rounded-full">
                            Candidater
                            <FiArrowRight className="text-xl" />
                        </NavbarButton>
                    </div>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClickAction={() =>
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onCloseAction={() => setIsMobileMenuOpen(false)}>
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-base font-medium text-muted-foreground hover:text-foreground py-3 px-2 rounded-lg hover:bg-accent transition-colors">
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4 pt-4">
                        {/* Bouton Brochure - même style que desktop */}
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#1a093e] text-white font-bold text-base shadow-md border-2 border-[#1a093e] hover:bg-[#2a0a5c] transition w-full justify-center">
                            <FiDownload className="text-xl" />
                            Brochure
                        </a>
                        {/* Bouton Portes Ouvertes - même style que desktop */}
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500 text-white font-bold text-base shadow-md border-2 border-orange-500 hover:bg-orange-600 transition w-full justify-center">
                            Portes Ouvertes
                            <FiArrowRight className="text-xl" />
                        </a>
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full text-base">
                            Admissions
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    )
}

export default Header
