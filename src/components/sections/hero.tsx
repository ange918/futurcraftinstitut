'use client'

import React from 'react'
import Link from 'next/link'

// Styles d'animation en ligne
const floatStyles = {
    float1: {
        animation: 'float 4s ease-in-out infinite',
    },
    float2: {
        animation: 'float 4s ease-in-out infinite',
        animationDelay: '1s',
    },
    float3: {
        animation: 'float 4s ease-in-out infinite',
        animationDelay: '2s',
    },
    float4: {
        animation: 'float 4s ease-in-out infinite',
        animationDelay: '3s',
    }
}

// Composants SVG flottants avec animations responsives
const FloatingIcons = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .float-animation { animation: none !important; }
                    }
                `
            }} />
            
            {/* Drone - haut gauche - visible seulement sur md+ */}
            <div 
                className="hidden md:block absolute top-8 left-4 md:top-12 md:left-8 lg:left-12 xl:left-16 float-animation"
                style={floatStyles.float1}
            >
                <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4L14 8H10L12 4ZM5.5 12.5L8.5 14.5L6.5 16.5L3.5 14.5L5.5 12.5ZM18.5 12.5L20.5 14.5L17.5 16.5L15.5 14.5L18.5 12.5ZM12 8C13.66 0 15 9.34 15 11S13.66 14 12 14 9 12.66 9 11 10.34 8 12 8ZM10 20H14V22H10V20Z"/>
                </svg>
            </div>

            {/* Code - gauche - visible seulement sur lg+ */}
            <div 
                className="hidden lg:block absolute top-1/3 left-4 lg:left-8 xl:left-12 float-animation"
                style={floatStyles.float2}
            >
                <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white border-2 border-white rounded-lg p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            </div>

            {/* Globe/Réseau - bas gauche - visible seulement sur md+ */}
            <div 
                className="hidden md:block absolute bottom-12 left-4 md:bottom-16 md:left-8 lg:left-12 xl:left-16 float-animation"
                style={floatStyles.float3}
            >
                <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white border-2 border-white rounded-full p-1 md:p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
                </svg>
            </div>

            {/* Ampoule/Idée - centre gauche - visible seulement sur lg+ */}
            <div 
                className="hidden lg:block absolute top-1/2 left-12 lg:left-16 xl:left-24 float-animation"
                style={floatStyles.float4}
            >
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-red-400 border-2 border-red-400 rounded-lg p-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,21C9,22.1 9.9,23 11,23H13C14.1,23 15,22.1 15,21V20H9V21ZM12,2C8.14,2 5,5.14 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9C19,5.14 15.86,2 12,2Z" />
                </svg>
            </div>

            {/* Certificat - haut centre - visible sur toutes les tailles */}
            <div 
                className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-8 float-animation"
                style={floatStyles.float1}
            >
                <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white border-2 border-white rounded-lg p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5l-3-3-3 3V4a2 2 0 012-2h4a2 2 0 012 2v16z" />
                </svg>
            </div>

            {/* Caméra - haut droite - visible seulement sur md+ */}
            <div 
                className="hidden md:block absolute top-8 right-4 md:top-12 md:right-8 lg:right-12 xl:right-16 float-animation"
                style={floatStyles.float2}
            >
                <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white border-2 border-white rounded-lg p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            </div>

            {/* Graphiques - droite - visible seulement sur lg+ */}
            <div 
                className="hidden lg:block absolute top-1/3 right-4 lg:right-8 xl:right-12 float-animation"
                style={floatStyles.float3}
            >
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,3V21H21V19H5V3H3ZM7,17H9V10H7V17ZM11,17H13V7H11V17ZM15,17H17V13H15V17Z" />
                </svg>
            </div>

            {/* Livre - droite - visible seulement sur md+ */}
            <div 
                className="hidden md:block absolute bottom-1/4 right-4 md:right-8 lg:right-12 xl:right-16 float-animation"
                style={floatStyles.float4}
            >
                <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>

            {/* Barres de progression flottantes - visible seulement sur lg+ */}
            <div 
                className="hidden lg:block absolute top-1/4 right-1/4 float-animation"
                style={floatStyles.float1}
            >
                <div className="w-12 h-1 bg-green-400 mb-1"></div>
                <div className="w-8 h-1 bg-yellow-400 mb-1"></div>
                <div className="w-6 h-1 bg-red-500"></div>
            </div>

            <div 
                className="hidden lg:block absolute bottom-1/3 left-1/3 float-animation"
                style={floatStyles.float2}
            >
                <div className="w-8 h-1 bg-green-400 mb-1"></div>
                <div className="w-6 h-1 bg-yellow-400 mb-1"></div>
                <div className="w-4 h-1 bg-red-500"></div>
            </div>
        </>
    )
}

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-4 py-16">
            {/* Image de fond */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <img
                    src="/image/hero.jpg"
                    alt="FuturCraft Institut Hero"
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: '100%', minWidth: '100%' }}
                />
                {/* Overlay sombre */}
                <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>

            {/* Icônes SVG flottantes */}
            <FloatingIcons />

            <div className="relative z-10 text-center max-w-6xl mx-auto">
                {/* Titre principal */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6">
                    FuturCraft <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">INSTITUT</span>
                </h1>

                {/* Sous-titre */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
                    Centre de formation engagé aux numérique et à la Tech
                </h2>

                {/* Barre de couleurs */}
                <div className="flex justify-center mb-8">
                    <div className="flex space-x-1">
                        <div className="w-12 sm:w-16 h-2 bg-green-500"></div>
                        <div className="w-12 sm:w-16 h-2 bg-yellow-400"></div>
                        <div className="w-12 sm:w-16 h-2 bg-red-500"></div>
                    </div>
                </div>

                {/* Texte descriptif */}
                <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed px-4">
                    FuturCraft INSTITUT est un centre de formation privé qui forme des étudiants 
                    engagés sur une durée de 6 mois à 2ans grâce à un enseignement moderne et 
                    professionnalisant. Nous offrons gratuitement le permis B à tous nos étudiants.
                </p>

                {/* Bouton */}
                <Link
                    href="/about"
                    className="inline-block px-6 sm:px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-lg sm:text-xl transition-all duration-200 transform hover:scale-105"
                >
                    Découvrir Futurcraft
                </Link>

                {/* Petite barre de couleurs en bas */}
                <div className="flex justify-start mt-12">
                    <div className="flex space-x-1">
                        <div className="w-6 sm:w-8 h-1 bg-green-500"></div>
                        <div className="w-6 sm:w-8 h-1 bg-yellow-400"></div>
                        <div className="w-6 sm:w-8 h-1 bg-red-500"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}