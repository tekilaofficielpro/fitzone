import { SectionHero } from './miniPageContact/SectionHero';
import { ContactLayout } from './miniPageContact/ContactLayout';
import { Formulaire } from './miniPageContact/Formulaire';
import { CTABanner } from './miniPageContact/CTABanner';
import { MAPSection } from './miniPageContact/MAPSection';
import {useScrollReveal} from './miniPageContact/userScroll';


// permet de faire le reveal des éléments au scroll, en ajoutant la classe 'is-visible' quand ils entrent dans le viewport. Chaque élément à révéler utilise ce hook pour obtenir une référence et déclencher l'animation CSS correspondante.
const Contact = () => {
  const formRef   = useScrollReveal()
  return (
    <>

    {/* Section hero */}
    <SectionHero />

    {/* section contact-layout */}
    <section className='container h-[870px]'>
      <div className='container mx-2 mt-70'>
        <ul className='flex flex-row gap-x-[64px]'>
          <li>
            <ContactLayout />
          </li>

          {/* ── Formulaire ── */}
          <li ref={formRef} className='w-[720px] h-[662px] bg-[#1C1B1B] top-[96px] left-[533.33px] rounded-[4px] border-1 border-[#5F3F3A]/15 pt-[39.5px] pr-[40px] pb-[56px] pl-[40px] gap-[32px] col-start-6 col-span-7 row-start-1 row-span-1 reveal-right'>
            <Formulaire />
          </li>
        </ul>
      </div>
    </section>

    {/* section MAP */}
    <MAPSection/>

    {/* section CTA Banner */}
    <CTABanner />
    </>
  )
}

export default Contact