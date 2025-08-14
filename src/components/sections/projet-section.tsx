import Image from 'next/image'

export default function ProjetSection() {
    return (
        <section className="w-full bg-[#07061a] text-white py-16 flex flex-col items-center">
            <h2 className="text-3xl font-black text-center mb-12">
                Découvrez nos projets
                <span className="inline-block align-middle ml-2 w-8 h-2 bg-[var(--secondary)] rounded" />
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-24 w-full max-w-5xl mb-16">
                {/* Groupe 1 */}
                <div className="flex flex-col items-center text-center w-full md:w-auto max-w-xs md:max-w-none mb-8 md:mb-0">
                    <div className="rounded-3xl overflow-hidden shadow-lg w-full">
                        <Image
                            src="/image/img13.jpg"
                            alt="Orléans"
                            width={450}
                            height={400}
                            className="object-cover w-full h-auto md:w-[450px] md:h-[400px]"
                        />
                    </div>
                    <div className="flex-1 w-full mt-4">
                        <button className='text-4xl font-extrabold mb-4 hover:text-secondary rounded-full'>
                            <a href="#">Programme FUTUR</a></button>
                        <p className="text-xl text-gray-300">
                            Programmes d'intégration des enfants aux métiers
                            numériques et à la technologie.
                        </p>
                    </div>
                </div>
                {/* Groupe 2 */}
                <div className="flex flex-col items-center text-center w-full md:w-auto max-w-xs md:max-w-none">
                    <div className="rounded-3xl overflow-hidden shadow-lg w-full">
                        <Image
                            src="/image/victoire.jpg"
                            alt="Dijon"
                            width={450}
                            height={400}
                            className="object-cover w-full h-auto md:w-[450px] md:h-[400px]"
                        />
                    </div>
                    <div className="flex-1 w-full mt-4">
                        <h3 className="text-4xl font-extrabold mb-4">E-ENTREPRISE</h3>
                        <p className="text-xl text-gray-300">
                            Entreprise dédiée aux services numériques, à la communication et à l'évènementiel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
