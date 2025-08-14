'use client'
import React from 'react'
import { useInView } from '../../../hooks/use-in-view'

export default function CodaChiffresSection() {
    // Bloc 1
    const [ref1, inView1] = useInView({ threshold: 0.2 })
    // Bloc 2
    const [ref2, inView2] = useInView({ threshold: 0.2 })
    // Bloc 3
    const [ref3, inView3] = useInView({ threshold: 0.2 })
    // Bloc 4
    const [ref4, inView4] = useInView({ threshold: 0.2 })

    return (
        <section className="w-full bg-[#0a0820] py-28 px-4 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
                FuturCraft INSTITUT en chiffres
                <span className="text-[var(--secondary)]">_</span>
            </h2>
            <p className="text-xl text-white text-center mb-16">
                Quelques chiffres clés sur les formations FuturCraft INSTITUT
            </p>
            <div className="w-full max-w-7xl grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-y-24 gap-x-0">
                {/* Ligne 1 */}
                <div
                    ref={ref1}
                    className={`flex flex-col items-start justify-center pl-8 md:-translate-x-16 md:-translate-y-8 transition-all duration-700 opacity-0 delay-100 ${
                        inView1 ? 'md:translate-x-0 opacity-100' : ''
                    }`}>
                    <span className="text-[4.5rem] md:text-[5.5rem] font-extrabold text-[var(--secondary)] leading-none">
                        +95%
                    </span>
                    <p className="text-xl text-white text-left mt-2 max-w-[500px]">
                        Nos étudiants qui reçoivent une proposition d’embauche
                        <br />
                        dans les 6 mois suivant l’obtention de leur diplôme
                    </p>
                </div>
                <div
                    ref={ref2}
                    className={`flex flex-col items-end justify-center pr-8 md:translate-x-16 md:translate-y-32 transition-all duration-700 opacity-0 delay-200 ${
                        inView2
                            ? 'md:translate-x-0 md:translate-y-32 opacity-100'
                            : ''
                    }`}>
                    <span className="text-[4.5rem] md:text-[5.5rem] font-extrabold text-[var(--secondary)] leading-none">
                        6 ms à 2 ans
                    </span>
                    <p className="text-xl text-white text-right mt-2 max-w-[500px]">
                        Pour une formation complète
                        <br />
                        et certifiante à FuturCraft INSTITUT
                    </p>
                </div>
                {/* Ligne 2 */}
                <div
                    ref={ref3}
                    className={`flex flex-col items-start justify-center pl-8 md:-translate-x-16 md:-translate-y-8 transition-all duration-700 opacity-0 delay-300 ${
                        inView3 ? 'md:translate-x-0 opacity-100' : ''
                    }`}>
                    <span className="text-[4.5rem] md:text-[5.5rem] font-extrabold text-[var(--secondary)] leading-none">
                        +20
                    </span>
                    <p className="text-xl text-white text-left mt-2 max-w-[500px]">
                        entreprises partenaire pour 
                        <br />
                        les stages et emplois
                    </p>
                </div>
                <div
                    ref={ref4}
                    className={`flex flex-col items-end justify-center pr-8 md:translate-x-16 md:translate-y-32 transition-all duration-700 opacity-0 delay-500 ${
                        inView4
                            ? 'md:translate-x-0 md:translate-y-32 opacity-100'
                            : ''
                    }`}>
                    <span className="text-[4.5rem] md:text-[5.5rem] font-extrabold text-[var(--secondary)] leading-none">
                        150 000f CFA
                    </span>
                    <p className="text-xl text-white text-right mt-2 max-w-[500px]">
                        Le salaire moyen d’un développeur
                        <br />
                        informatique en sortie d’études
                    </p>
                </div>
            </div>
        </section>
    )
}
