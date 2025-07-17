import { FiClock, FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'

export default function OpenDaySection() {
    return (
        <section className="w-full py-10 sm:py-16 bg-white text-black px-2 sm:px-4 md:px-8 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-4">
                Journées Portes Ouvertes
                <span className="inline-block w-8 md:w-12 h-1 bg-[var(--secondary)] align-middle ml-2" />
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-center mb-10 max-w-3xl">
                Venez visiter notre centre de formation, découvrir nos projets,
                échanger avec les étudiants et rencontrer les équipes
                pédagogiques !
            </p>
            {/* Version mobile (empilé) */}
            <div className="flex flex-col gap-4 justify-center items-center mb-10 w-full md:hidden">
                {/* Dijon */}
                <div className="flex flex-col gap-2 items-center w-full">
                    <Image
                        src="/image/ange.jpg"
                        alt="Dijon"
                        width={400}
                        height={400}
                        className="rounded-2xl object-cover w-full max-w-xs h-[200px] sm:h-[260px]"
                    />
                    <div className="flex flex-col items-start bg-transparent w-full">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold px-4 py-2 rounded-full text-base">
                                28/6/2025
                            </span>
                            <span className="flex items-center gap-1 text-[var(--foreground)] font-semibold text-base">
                                <FiClock className="inline-block text-lg" />
                                14h - 18h
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2 w-full">
                            <h3 className="text-xl sm:text-2xl font-black">
                                FuturCraft INSTITUT
                            </h3>
                            <a
                                href="#"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 flex items-center justify-center text-[var(--secondary-foreground)] text-xl hover:scale-110 transition">
                                <FiArrowUpRight />
                            </a>
                        </div>
                        <p className="text-base">
                            Venez visiter notre centre de formation, découvrir
                            nos projets, échanger avec nos étudiants et
                            rencontrer notre équipe pédagogique !
                        </p>
                    </div>
                </div>
                {/* Orléans */}
                <div className="flex flex-col gap-2 items-center w-full">
                    <Image
                        src="/image/victoire.jpg"
                        alt="Orléans"
                        width={400}
                        height={400}
                        className="rounded-2xl object-cover w-full max-w-xs h-[200px] sm:h-[260px]"
                    />
                    <div className="flex flex-col items-start bg-transparent w-full">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold px-4 py-2 rounded-full text-base">
                                21/6/2025
                            </span>
                            <span className="flex items-center gap-1 text-[var(--foreground)] font-semibold text-base">
                                <FiClock className="inline-block text-lg" />
                                14h - 18h
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2 w-full">
                            <h3 className="text-xl sm:text-2xl font-black">
                                FuturCraft INSTITUT
                            </h3>
                            <a
                                href="#"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 flex items-center justify-center text-[var(--secondary-foreground)] text-xl hover:scale-110 transition">
                                <FiArrowUpRight />
                            </a>
                        </div>
                        <p className="text-base">
                            Venez visiter FuturCraft Institut, découvrir nos
                            projets, projets, échanger avec nos étudiants et
                            rencontrer notre équipe pédagogique !
                        </p>
                    </div>
                </div>
            </div>
            {/* Version desktop (image + texte côte à côte) */}
            <div className="hidden md:flex flex-row gap-12 md:gap-28 justify-center items-start w-full mb-10">
                {/* Dijon */}
                <div className="flex-1 flex flex-col items-center bg-transparent max-w-md">
                    <Image
                        src="/image/ange.jpg"
                        alt="Dijon"
                        width={400}
                        height={400}
                        className="rounded-2xl object-cover w-full h-[220px] md:h-[320px] mb-4"
                    />
                    <div className="w-full flex flex-col items-start">
                        <div className="flex items-center gap-4 mb-2">
                            <span className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold px-6 py-2 rounded-full text-base md:text-lg">
                                28/6/2025
                            </span>
                            <span className="flex items-center gap-2 text-[var(--foreground)] font-semibold text-base md:text-lg">
                                <FiClock className="inline-block text-lg md:text-xl" />
                                14h - 18h
                            </span>
                        </div>
                        <div className="flex items-center gap-4 mb-2 w-full">
                            <h3 className="text-xl md:text-2xl font-black">
                                FuturCraft INSTITUT
                            </h3>
                            <a
                                href="#"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 flex items-center justify-center text-[var(--secondary-foreground)] text-xl hover:scale-110 transition">
                                <FiArrowUpRight />
                            </a>
                        </div>
                        <p className="text-base md:text-lg">
                            Venez visiter notre centre de formation, découvrir
                            nos projets, échanger avec nos étudiants et
                            rencontrer notre équipe pédagogique !
                        </p>
                    </div>
                </div>
                {/* Orléans */}
                <div className="flex-1 flex flex-col items-center bg-transparent max-w-md">
                    <Image
                        src="/image/victoire.jpg"
                        alt="Orléans"
                        width={400}
                        height={400}
                        className="rounded-2xl object-cover w-full h-[220px] md:h-[320px] mb-4"
                    />
                    <div className="w-full flex flex-col items-start">
                        <div className="flex items-center gap-4 mb-2">
                            <span className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold px-6 py-2 rounded-full text-base md:text-lg">
                                21/6/2025
                            </span>
                            <span className="flex items-center gap-2 text-[var(--foreground)] font-semibold text-base md:text-lg">
                                <FiClock className="inline-block text-lg md:text-xl" />
                                14h - 18h
                            </span>
                        </div>
                        <div className="flex items-center gap-4 mb-2 w-full">
                            <h3 className="text-xl md:text-2xl font-black">
                                FuturCraft INSTITUT
                            </h3>
                            <a
                                href="#"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 flex items-center justify-center text-[var(--secondary-foreground)] text-xl hover:scale-110 transition">
                                <FiArrowUpRight />
                            </a>
                        </div>
                        <p className="text-base md:text-lg">
                            Venez visiter FuturCraft Institut, découvrir nos
                            projets, projets, échanger avec nos étudiants et
                            rencontrer notre équipe pédagogique !
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
