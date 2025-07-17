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
        src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=500&h=500&facepad=2',
        name: 'Alice Dupont',
        designation: 'Étudiante en Web',
        quote: "J'ai adoré la formation, l'équipe pédagogique est très à l'écoute et les projets sont concrets !",
    },
    {
        src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=500&h=500&facepad=2',
        name: 'Mohamed Benali',
        designation: 'Développeur Junior',
        quote: "Grâce à FuturCraft, j'ai trouvé une alternance et j'ai pu progresser très vite.",
    },
    {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=500&h=500&facepad=2',
        name: 'Sophie Martin',
        designation: 'Graphiste',
        quote: 'Les intervenants sont passionnés et nous transmettent leur savoir avec enthousiasme.',
    },
]

export default function Home() {
    return (
        <>
            <HeroSection />
            <OpenDaySection />
            <WhyChooseUsSection />
            <FormationsSection />
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            <CodaChiffresSection />
            <ProjetSection />
            <EquipePedagogiqueSection />
            <ActualiteSection />
        </>
    )
}
