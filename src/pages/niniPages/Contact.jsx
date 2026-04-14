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
    <section className='container min-h-[870px]'>
      <div className='mx-2 mt-16 lg:mt-[70px]'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-x-[64px] items-start'>
          
          <div className='w-full lg:w-auto'>
            <ContactLayout />
          </div>

          {/* ── Formulaire ── */}
          <div
            ref={formRef}
            className='w-full lg:w-[720px] lg:h-[662px] bg-[#1C1B1B] rounded-[4px] border border-[#5F3F3A]/15 pt-[39.5px] pr-[40px] pb-[56px] pl-[40px] gap-[32px] reveal-right'
          >
            <Formulaire />
          </div>

        </div>
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