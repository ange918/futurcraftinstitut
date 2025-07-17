'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const articles = [
    {
        titre: "Les métiers de l'informatique : pas d'inquiétude sur les débouchés !",
        image: '/image/article1.jpg',
        lien: '#',
    },
    {
        titre: "Qu'est-ce que le product management ?",
        image: '/image/article2.jpg',
        lien: '#',
    },
    {
        titre: 'Les bonnes pratiques pour décrocher une alternance en informatique',
        image: '/image/article3.jpg',
        lien: '#',
    },
    {
        titre: 'Comment réussir son entretien technique ?',
        image: '/image/article4.jpg',
        lien: '#',
    },
]

export default function ActualiteSection() {
    const marqueeRef = useRef<HTMLDivElement>(null)
    const [pos, setPos] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const pauseTimeout = useRef<NodeJS.Timeout | null>(null)

    // Duplique les articles pour l'effet infini
    const allArticles = [...articles, ...articles]

    // Animation continue
    useEffect(() => {
        const marquee = marqueeRef.current
        if (!marquee) return
        let frame: number
        let localPos = pos
        const speed = 0.5 // pixels par frame
        function animate() {
            if (!marquee) return
            if (!isPaused) {
                localPos -= speed
                if (Math.abs(localPos) >= marquee.scrollWidth / 2) {
                    localPos = 0
                }
                setPos(localPos)
            }
            marquee.style.transform = `translateX(${localPos}px)`
            frame = requestAnimationFrame(animate)
        }
        frame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frame)
    }, [isPaused])

    // Navigation manuelle
    const handleManual = (direction: 'left' | 'right') => {
        setIsPaused(true)
        if (pauseTimeout.current) clearTimeout(pauseTimeout.current)
        setPos(prev => {
            const marquee = marqueeRef.current
            if (!marquee) return prev
            let newPos = direction === 'left' ? prev + 280 : prev - 280
            const maxScroll = -(marquee.scrollWidth / 2)
            if (newPos > 0) newPos = maxScroll + newPos
            if (newPos < maxScroll) newPos = 0
            marquee.style.transform = `translateX(${newPos}px)`
            return newPos
        })
        pauseTimeout.current = setTimeout(() => setIsPaused(false), 4000)
    }

    return (
        <section className="w-full flex flex-col md:flex-col lg:flex-row items-center justify-between py-10 px-2 sm:px-4 md:px-8 bg-[var(--background)]">
            {/* Colonne texte avec masque */}
            <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0 md:mr-0 lg:mr-12 w-full max-w-xl relative z-20 bg-[var(--background)] lg:bg-[var(--background)] lg:shadow-xl lg:rounded-2xl lg:pl-6 lg:py-8 overflow-visible">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-[var(--secondary)]">
                    L'actualité FuturCraft INSTITUT
                    <span className="inline-block w-8 sm:w-10 h-1 bg-[var(--secondary)] align-middle ml-2" />
                </h2>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg text-[var(--muted-foreground)]">
                    Retrouvez toute l'actualité FuturCraft INSTITUT, sur
                    l'ensemble des campus.
                </p>
                <button className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg shadow hover:opacity-90 transition">
                    Tous nos articles
                </button>
            </div>
            {/* Colonne carrousel/slider avec effet de masque et défilement continu */}
            <div className="flex-1 flex flex-col items-end w-full max-w-4xl mt-8 md:mt-0 relative lg:overflow-visible">
                {/* Flèches de navigation */}
                <div className="flex flex-row gap-2 justify-end mb-3 sm:mb-4 w-full z-40">
                    <button
                        onClick={() => handleManual('left')}
                        className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-[var(--card)] text-[var(--foreground)] text-xl sm:text-2xl hover:bg-[var(--secondary)] hover:text-[var(--background)] transition">
                        &#8592;
                    </button>
                    <button
                        onClick={() => handleManual('right')}
                        className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-[var(--card)] text-[var(--foreground)] text-xl sm:text-2xl hover:bg-[var(--secondary)] hover:text-[var(--background)] transition">
                        &#8594;
                    </button>
                </div>
                {/* Masque à gauche */}
                <div
                    className="hidden lg:block absolute left-0 top-0 h-full z-30"
                    style={{ width: '420px', pointerEvents: 'none' }}></div>
                {/* Articles visibles avec overflow-hidden et animation continue */}
                <div
                    className="flex flex-col gap-4 flex-1 justify-center w-full md:flex-col lg:flex-row lg:gap-6 relative lg:overflow-hidden"
                    style={{ maxWidth: '820px', height: '320px' }}>
                    <div
                        ref={marqueeRef}
                        className="flex flex-row"
                        style={{
                            willChange: 'transform',
                            transform: `translateX(${pos}px)`,
                        }}>
                        {allArticles.map((article, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[320px] lg:w-[260px] lg:h-[300px] bg-[var(--card)] text-[var(--card-foreground)] mb-4 lg:mb-0 flex-shrink-0 flex flex-col mx-2">
                                <Image
                                    src={article.image}
                                    alt={article.titre}
                                    width={260}
                                    height={160}
                                    className="object-cover w-full h-[160px] lg:h-[160px]"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-[var(--background)]/90 rounded-b-2xl flex flex-row items-center justify-between min-h-[70px]">
                                    <span className="font-bold text-base sm:text-lg text-[var(--foreground)] line-clamp-3">
                                        {article.titre}
                                    </span>
                                    <a
                                        href={article.lien}
                                        className="ml-2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--background)] transition">
                                        <span className="text-lg sm:text-xl">
                                            &#8599;
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
