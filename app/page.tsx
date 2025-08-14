import HeroSection from '../src/components/sections/hero'
import OpenDaySection from '../src/components/sections/open-day'
import WhyChooseUsSection from '../src/components/sections/why-choose-us'
import FormationsSection from '../src/components/sections/formations-section'
import ProjetSection from '../src/components/sections/projet-section'
import EquipePedagogiqueSection from '../src/components/sections/equipe-pedagogique'
import ActualiteSection from '../src/components/sections/actualite'
import CodaChiffresSection from '../src/components/sections/coda-chiffres'
import { AnimatedTestimonials } from '../src/components/ui/AnimatedTestimonials'

const testimonials = [
    {
        src: '/image/carmel.jpg',
        name: 'Carmel DANGBEGNON',
        designation: 'Prompt Engineer',
        quote: 'Grâce à FuturCraft Institut, j\'ai ma soeur qui a pu acquérir des compétences concrètes et trouver un emploi rapidement. Les formateurs sont passionnés et toujours à l\'écoute.',
    },
    {
        src: '/image/prego.jpg',
        name: 'Président DJANGOUN',
        designation: 'Influenceur artiste chanteur',
        quote: 'La pédagogie est très pratique et adaptée au marché africain. J\'ai adoré les projets collaboratifs et l\'ambiance familiale du centre. En quelques mois de formation, leurs étudiants ont pu me créer mon site web personnel et celui de mon concert présidentiel.',
    },
    {
        src: '/image/wiliam.jpg',
        name: 'William ZOMANHOUN',
        designation: 'Promotteur  d\'évenement',
        quote: 'Les outils et technologies enseignés sont à la pointe. J\'ai pu me spécialiser en Intélligence artificielle en quelques mois.',
    },
    {
        src: '/image/houessinon.jpg',
        name: 'Carlos HOUESSINON',
        designation: 'Directeur d\'école',
        quote: 'Former la nouvelle génération de talents africains est une fierté. Les étudiants sont motivés et les résultats sont là !',
    },
    {
        src: '/image/nicodem.jpg',
        name: 'Nicodème ATAKOUN',
        designation: 'Directeur d\'école',
        quote: 'FuturCraft Institut offre un environnement propice à l\'innovation et à l\'excellence. Je recommande vivement à tous les passionnés du numérique.',
    },
    {
        src: '/image/cedric.jpg',
        name: 'Cédric Magloire AKOFODJI',
        designation: 'Développeur web',
        quote: 'L\'approche pratique et moderne de FuturCraft est hors pair sur leurs cours sur l\'intelligence artificielle. Une formation exceptionnelle !',
    },
]

export default function Home() {
    return (
        <>
            {/* Pas d'offset sur la home en mobile si header caché */}
            <HeroSection />
            <FormationsSection />
            <WhyChooseUsSection />
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            <ProjetSection />
            <OpenDaySection />
            <EquipePedagogiqueSection />
            <CodaChiffresSection />
            <ActualiteSection />
        </>
    )
}
