import {
	FaFacebookF,
	FaInstagram,
	FaTiktok,
	FaLinkedinIn,
} from 'react-icons/fa'
import Link from 'next/link'

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
						<li>
							<Link href="/formation/developpement-web" className="font-semibold text-base md:text-lg hover:underline">
								Développement web
							</Link>
						</li>
						<li>
							<Link href="/formation/webmaster" className="font-semibold text-base md:text-lg hover:underline">
								Webmaster
							</Link>
						</li>
						<li>
							<Link href="/formation/photo-cadrage-montage" className="font-semibold text-base md:text-lg hover:underline">
								Photographie, cadrage et montage vidéo
							</Link>
						</li>
						<li>
							<Link href="/formation/graphisme-web-design" className="font-semibold text-base md:text-lg hover:underline">
								Graphisme et web design
							</Link>
						</li>
						<li>
							<Link href="/formation/secretariat-caisse" className="font-semibold text-base md:text-lg hover:underline">
								Secrétariat et caisse
							</Link>
						</li>
						<li>
							<Link href="/formation/marketing-digital" className="font-semibold text-base md:text-lg hover:underline">
								Marketing digital
							</Link>
						</li>
						<li>
							<Link href="/formation/graphisme-serigraphie" className="font-semibold text-base md:text-lg hover:underline">
								Graphisme et sérigraphie
							</Link>
						</li>
						<li>
							<Link href="/formation/developpement-ia" className="font-semibold text-base md:text-lg hover:underline">
								Développement IA
							</Link>
						</li>
						<li>
							<Link href="/formation/maitrise-ia" className="font-semibold text-base md:text-lg hover:underline">
								Maîtrise IA
							</Link>
						</li>
						<li>
							<Link href="/formation/maintenance-informatique-reseau" className="font-semibold text-base md:text-lg hover:underline">
								Maintenance informatique & réseau
							</Link>
						</li>
						<li>
							<Link href="/formation/copywriting" className="font-semibold text-base md:text-lg hover:underline">
								Copywriting
							</Link>
						</li>
						<li>
							<Link href="/formation/e-commerce" className="font-semibold text-base md:text-lg hover:underline">
								E-commerce
							</Link>
						</li>
						<li>
							<Link href="/formation/pilotage-drone" className="font-semibold text-base md:text-lg hover:underline">
								Pilotage de drone
							</Link>
						</li>
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
                        </ul>
                    </div>
                    {/* Entreprise */}
                    <div className="min-w-0 sm:min-w-[140px] mb-8 sm:mb-0 w-full sm:w-auto">
                        <h3 className="font-bold text-lg md:text-xl mb-4">
                            Entreprise
                        </h3>
                        <ul className="space-y-2">
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
                                href="https://www.facebook.com/futurcraftinstitue"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#181818] text-xl md:text-2xl hover:scale-110 transition">
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/futurcraftinstitut?igsh=emp6c205NXd6OWc0"
                                className="bg-[var(--secondary)] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#181818] text-xl md:text-2xl hover:scale-110 transition">
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.tiktok.com/@futur.craft.insti?_t=ZM-8yysttUHo4E&_r=1"
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
