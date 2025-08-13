import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaLinkedinIn,
} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#0a091c] to-[#1a0840] text-white pt-48 pb-8 px-2 sm:px-4 md:px-12 overflow-hidden ">
            {/* Pont arrondi large et aplati en haut */}
            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col pt-10 md:pt-16 pb-8 px-2 sm:px-4 md:px-8">
                {/* Logo sur la première ligne */}
                <div className="w-full flex justify-center md:justify-start mb-8">
                    <span className="block text-3xl sm:text-4xl md:text-5xl font-black leading-none text-center md:text-left">
                        FuturCraft INSTITUT
                        <span className="text-[var(--secondary)]">_</span>
                    </span>
                </div>
                {/* Ligne de colonnes alignées horizontalement ou verticalement */}
                <div className="w-full flex flex-col sm:flex-row flex-wrap justify-between items-center sm:items-start gap-6 md:gap-12 mb-12 text-center sm:text-left">
                    {/* Formations */}
                    <div className="min-w-0 sm:min-w-[180px] mb-8 sm:mb-0 w-full sm:w-auto">
                        <h3 className="font-bold text-lg md:text-xl mb-4">
                            Formations
                        </h3>
                        <ul className="space-y-2">
                            <li className="font-semibold text-base md:text-lg">
                                Développement web & mobile
                            </li>
                            <li className="font-semibold text-base md:text-lg">
                                Motion Design
                            </li>
                            <li className="font-semibold text-base md:text-lg">
                                Intelligence artificielle IA
                            </li>
                            <li className="font-semibold text-base md:text-lg">
                            Marketing digital
                            </li>
                            <li className="font-semibold text-base md:text-lg">
                                Photographie et montage vidéo
                            </li>
                            <li className="font-semibold text-base md:text-lg">
                            Design graphic & web
                            </li>
                            <li className="font-semibold text-base md:text-lg">
                            Marketing Digital
                            </li>
                            <li className="font-semibold text-base md:text-lg">
                            Impression textile et plastique
                            </li>
                            <li className="font-semibold text-base md:text-lg">
                                Photographie professionnelle</li>
                            <li className="font-semibold text-base md:text-lg">
                                Graphisme et Sérigraphie</li>
                            <li className="font-semibold text-base md:text-lg">
                                Maintenance informatique</li>
                        </ul>
                    </div>
                    {/* À propos */}
                    <div className="min-w-0 sm:min-w-[140px] mb-8 sm:mb-0 w-full sm:w-auto">
                        <h3 className="font-bold text-lg md:text-xl mb-4">
                            A propos
                        </h3>
                        <ul className="space-y-2">
                            <li>L'école</li>
                            <li>Journées Portes Ouvertes</li>
                            <li>Cursus En 5 Ans</li>
                            <li>Les campus</li>
                            <li>Débouchés</li>
                            <li>Modules de formation</li>
                        </ul>
                    </div>
                    {/* Entreprise */}
                    <div className="min-w-0 sm:min-w-[140px] mb-8 sm:mb-0 w-full sm:w-auto">
                        <h3 className="font-bold text-lg md:text-xl mb-4">
                            Entreprise
                        </h3>
                        <ul className="space-y-2">
                            <li>Recruter un étudiant</li>
                            <li>Déposer une offre d'emploi</li>
                            <li>Rejoindre FuturCraft Institut</li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className="min-w-0 sm:min-w-[180px] mb-8 sm:mb-0 w-full sm:w-auto flex flex-col items-center sm:items-start">
                        <h3 className="font-bold text-lg md:text-xl mb-4">
                            Contact
                        </h3>
                        <div className="mb-1 text-center sm:text-left">
                            Godomey, Supermarché O Bénin Avant pk14
                        </div>
                        <div className="font-semibold text-center sm:text-left mb-3">
                            contact@futurcraftinstitut.com
                        </div>
                    </div>
                    {/* Réseaux sociaux */}
                    <div className="min-w-0 sm:min-w-[140px] flex flex-col items-center sm:items-start justify-start pt-1 w-full sm:w-auto">
                        <h3 className="font-bold text-lg md:text-xl mb-4 opacity-0 select-none">
                            Réseaux
                        </h3>
                        <div className="flex gap-3 justify-center sm:justify-start">
                            <a
                                href="#"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#181818] text-xl md:text-2xl hover:scale-110 transition">
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#181818] text-xl md:text-2xl hover:scale-110 transition">
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#181818] text-xl md:text-2xl hover:scale-110 transition">
                                <FaTiktok />
                            </a>
                            <a
                                href="#"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#181818] text-xl md:text-2xl hover:scale-110 transition">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Mentions légales */}
                <div className="w-full flex flex-col sm:flex-row justify-center items-center text-sm text-white/80 gap-2 sm:gap-8 pt-8 border-t border-white/10 text-center sm:text-left">
                    <span>© 2025 Tous droits réservés.</span>
                    <a href="#" className="hover:underline">
                        Politique de confidentialité
                    </a>
                    <a href="#" className="hover:underline">
                        Politique cookies
                    </a>
                </div>
            </div>
        </footer>
    )
}
