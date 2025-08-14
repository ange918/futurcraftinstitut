'use client'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'

// Liste de témoignages africains par défaut
export const defaultTestimonials = [
    {
        src: '/image/carmel.jpg',
        name: 'Carmel DANGBEGNON',
        designation: 'Prompt Engineer',
        quote: 'Grâce à FuturCraft Institut, j\'ai pu acquérir des compétences concrètes et trouver un emploi rapidement. Les formateurs sont passionnés et toujours à l\'écoute.',
    },
    {
        src: '/image/djangoun.jpg',
        name: 'Président DJANGOUN',
        designation: 'Influenceur artiste chanteur',
        quote: 'La pédagogie est très pratique et adaptée au marché africain. J\'ai adoré les projets collaboratifs et l\'ambiance familiale du campus.',
    },
    {
        src: '/image/william.jpg',
        name: 'William ZOMANHOUN',
        designation: 'Promotteur  d\'évenement',
        quote: 'Les outils et technologies enseignés sont à la pointe. J\'ai pu me spécialiser en développement web et décrocher un stage dans une grande entreprise.',
    },
    {
        src: '/image/houessinon.jpg',
        name: 'Carlos HOUESSINON',
        designation: 'Directeur d\'école',
        quote: 'Former la nouvelle génération de talents africains est une fierté. Les étudiants sont motivés et les résultats sont là !',
    },
    {
        src: '/image/atakoun.jpg',
        name: 'Nicodème ATAKOUN',
        designation: 'Directeur d\'école',
        quote: 'FuturCraft Institut offre un environnement propice à l\'innovation et à l\'excellence. Je recommande vivement à tous les passionnés du numérique.',
    },
    {
        src: '/image/magloire.jpg',
        name: 'Cédric Magloire AKOFODJI',
        designation: 'Développeur web',
        quote: 'L\'approche pratique et moderne de FuturCraft m\'a permis de maîtriser l\'intelligence artificielle. Une formation exceptionnelle !',
    },
]

export const AnimatedTestimonials = ({
    testimonials = defaultTestimonials,
    autoplay = false,
}: {
    testimonials?: Array<{
        src: string
        name: string
        designation: string
        quote: string
    }>
    autoplay?: boolean
}) => {
    const [active, setActive] = useState(0)

    const handleNext = () => {
        setActive(prev => (prev + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setActive(
            prev => (prev - 1 + testimonials.length) % testimonials.length
        )
    }

    const isActive = (index: number) => {
        return index === active
    }

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000)
            return () => clearInterval(interval)
        }
    }, [autoplay])

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10
    }
    return (
        <>
            <h2 className="text-2xl md:text-3xl font-bold text-[#ff9900] text-center mb-6 md:mb-10">
                Témoignages
            </h2>
            <div className="mx-auto max-w-sm px-4 py-8 md:py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 border-2 border-[#ff9900] rounded-3xl bg-[#181818]">
                <div className="relative grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2">
                    <div>
                        <div className="relative h-60 md:h-80 w-full">
                            <AnimatePresence>
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.src}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: -100,
                                            rotate: randomRotateY(),
                                        }}
                                        animate={{
                                            opacity: isActive(index) ? 1 : 0.7,
                                            scale: isActive(index) ? 1 : 0.95,
                                            z: isActive(index) ? 0 : -100,
                                            rotate: isActive(index)
                                                ? 0
                                                : randomRotateY(),
                                            zIndex: isActive(index)
                                                ? 40
                                                : testimonials.length +
                                                  2 -
                                                  index,
                                            y: isActive(index)
                                                ? [0, -80, 0]
                                                : 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: 100,
                                            rotate: randomRotateY(),
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: 'easeInOut',
                                        }}
                                        className="absolute inset-0 origin-bottom">
                                        <img
                                            src={testimonial.src}
                                            alt={testimonial.name}
                                            width={500}
                                            height={500}
                                            draggable={false}
                                            className="h-full w-full rounded-3xl object-cover object-center"
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between py-4">
                        <motion.div
                            key={active}
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -20,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeInOut',
                            }}>
                            <h3 className="text-xl md:text-2xl font-bold text-[#ff9900]">
                                {testimonials[active].name}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-neutral-500">
                                {testimonials[active].designation}
                            </p>
                            <motion.p className="mt-4 md:mt-8 text-base md:text-lg text-white">
                                {testimonials[active].quote
                                    .split(' ')
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{
                                                filter: 'blur(10px)',
                                                opacity: 0,
                                                y: 5,
                                            }}
                                            animate={{
                                                filter: 'blur(0px)',
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                ease: 'easeInOut',
                                                delay: 0.02 * index,
                                            }}
                                            className="inline-block">
                                            {word}&nbsp;
                                        </motion.span>
                                    ))}
                            </motion.p>
                        </motion.div>
                        <div className="flex gap-4 pt-6 md:pt-12">
                            <button
                                onClick={handlePrev}
                                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
