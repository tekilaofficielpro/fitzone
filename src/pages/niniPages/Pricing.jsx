import { useEffect} from 'react'
import HeroSection from './miniPagePricing/HeroSection';
import { PricingCard } from './miniPagePricing/PricingCard';
import { ComparePlan } from './miniPagePricing/ComparePlan';
import { SectionFAQ } from './miniPagePricing/SectionFAQ';
import { SectionFinal } from './miniPagePricing/SectionFinal';


/* ── Hook scroll reveal ── */
function useScrollReveal(selector) { // fait en sorte que les éléments avec la classe "anim-row" deviennent visibles lorsqu'ils entrent dans la fenêtre de visualisation
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

const Pricing = () => {
  useScrollReveal('.anim-row');
  useScrollReveal('.anim-faq');
  useScrollReveal('.anim-cta');

  return (
    <>
      {/* Section Hero et Banière */}
      <HeroSection />

      {/* Pricing card section */}
      <PricingCard />

      {/* Section compare plans */}
      <ComparePlan />

      {/* FAQ Section */}
      <SectionFAQ />

      {/* Section - Finale CTA */}
      <SectionFinal />
    </>
  )
}

export default Pricing