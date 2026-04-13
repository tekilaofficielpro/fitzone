import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// HomeHeader Animation - Hero section with staggered elements
export const homeHeaderAnimation = (container) => {
  const tl = gsap.timeline();
  
  if (!container) return tl;
  
  const line = container.querySelector("hr");
  const beyondText = container.querySelector("p:first-of-type");
  const title = container.querySelector("h1");
  const subtitle = container.querySelector("p:nth-of-type(2)");
  const buttons = container.querySelectorAll("button");

  tl.fromTo(line, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" }, 0)
    .fromTo(beyondText, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }, 0.1)
    .fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }, 0.2)
    .fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.4)
    .fromTo(buttons, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)", stagger: 0.1 }, 0.5);

  return tl;
};

// Review Section Animation - Stats counter with fade-in
export const reviewAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  const statDivs = container.querySelectorAll("[role='region']") || container.children;

  tl.fromTo(
    container,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
  )
    .fromTo(
      statDivs,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)", stagger: 0.1 },
      0.2
    );

  return tl;
};

// RatingHome Animation - Staggered card animation
export const ratingHomeAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  const cards = container.querySelectorAll("[class*='border-l-2']") || container.children;

  tl.fromTo(
    cards,
    { opacity: 0, y: 40, rotateX: -10 },
    { opacity: 1, y: 0, rotateX: 0, duration: 0.6, ease: "power2.out", stagger: 0.15 }
  );

  return tl;
};

// Commanders Animation - Grid items with hover effect
export const commandersAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  const title = container.querySelector("h1");
  const cards = container.querySelectorAll("[class*='w-80']") || container.querySelectorAll("div[class*='w-']");

  tl.fromTo(
    title,
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  )
    .fromTo(
      cards,
      { opacity: 0, y: 50, rotateZ: -5 },
      { opacity: 1, y: 0, rotateZ: 0, duration: 0.6, ease: "back.out(1.5)", stagger: 0.12 },
      0.2
    );

  // Add hover animation
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, boxShadow: "0 20px 40px rgba(255, 0, 0, 0.3)", duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3, ease: "power2.out" });
    });
  });

  return tl;
};

// Generic page animation for fade-in
export const pageAnimation = (element) => {
  const tl = gsap.timeline();

  tl.fromTo(
    element,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  );

  return tl;
};

// ============================================
// CLASSES PAGE ANIMATIONS
// ============================================

// HeaderClass Animation - Hero section
export const headerClassAnimation = (container) => {
  const tl = gsap.timeline();

  if (!container) return tl;

  const title = container.querySelector("h1");
  const line = container.querySelector("hr");
  const subtitle = container.querySelector("p");

  tl.fromTo(
    title,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
  )
    .fromTo(
      line,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
      0.3
    )
    .fromTo(
      subtitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      0.4
    );

  return tl;
};

// ClassHome Animation - Home page class cards
export const classHomeAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  if (!container) return tl;

  const title = container.querySelector("h1");
  const link = container.querySelector("a");
  const cards = container.querySelectorAll("[class*='relative'][class*='mt-10']");

  tl.fromTo(
    title,
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
  )
    .fromTo(
      link,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
      0
    )
    .fromTo(
      cards,
      { opacity: 0, y: 40, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.6, ease: "back.out(1.5)", stagger: 0.15 },
      0.2
    );

  return tl;
};

// Planning/Schedule Animation - Staggered grid animation
export const planningAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  if (!container) return tl;

  const title = container.querySelector("h1");
  const controls = container.querySelectorAll("[class*='text-sm'][class*='px-4']") || [];
  const dayBlocks = container.querySelectorAll("[class*='flex'][class*='flex-col'][class*='sm:items-center']");

  tl.fromTo(
    title,
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
  )
    .fromTo(
      controls,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.2)" },
      0.1
    )
    .fromTo(
      dayBlocks,
      { opacity: 0, y: 30, rotateZ: -2 },
      { opacity: 1, y: 0, rotateZ: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 },
      0.3
    );

  return tl;
};

// ClassExplorer Animation - Staggered class cards
export const classExplorerAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  if (!container) return tl;

  const title = container.querySelector("h1");
  const line = container.querySelector("hr");
  const cards = container.querySelectorAll("[class*='w-80'][class*='rounded-md']");

  tl.fromTo(
    title,
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
  )
    .fromTo(
      line,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
      0.1
    )
    .fromTo(
      cards,
      { opacity: 0, y: 50, rotateX: -15 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.6, ease: "back.out(1.5)", stagger: 0.12 },
      0.2
    );

  // Add hover animation to cards
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -15, boxShadow: "0 20px 40px rgba(255, 0, 0, 0.2)", duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3, ease: "power2.out" });
    });
  });

  return tl;
};

// ClassCTA Animation - Call to action section
export const classCTAAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  if (!container) return tl;

  const title = container.querySelector("h2");
  const buttons = container.querySelectorAll("button");

  tl.fromTo(
    title,
    { opacity: 0, scale: 0.9, y: 30 },
    { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
  )
    .fromTo(
      buttons,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)", stagger: 0.15 },
      0.3
    );

  return tl;
};

// ============================================
// COACHES PAGE ANIMATIONS
// ============================================

// HeaderCoach Animation - Coaches hero section
export const headerCoachAnimation = (container) => {
  const tl = gsap.timeline();

  if (!container) return tl;

  const title = container.querySelector("h1");
  const mainLine = container.querySelectorAll("hr")[0];
  const subtitle = container.querySelector("p");
  const gradientLine = container.querySelectorAll("hr")[1];

  tl.fromTo(
    title,
    { opacity: 0, scale: 0.8, y: -30 },
    { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
  )
    .fromTo(
      mainLine,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
      0.3
    )
    .fromTo(
      subtitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      0.4
    )
    .fromTo(
      gradientLine,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
      0.4
    );

  return tl;
};

// CardCoach Animation - Coach cards grid
export const cardCoachAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  if (!container) return tl;

  const cards = container.querySelectorAll("[class*='relative'][class*='w-80']");

  tl.fromTo(
    cards,
    { opacity: 0, y: 50, rotateZ: 5 },
    { opacity: 1, y: 0, rotateZ: 0, duration: 0.6, ease: "back.out(1.5)", stagger: 0.15 }
  );

  // Add hover animation to cards
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -20, boxShadow: "0 25px 50px rgba(239, 68, 68, 0.3)", duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3, ease: "power2.out" });
    });
  });

  return tl;
};

// FeaturedCoach Animation - Featured coach section with image and text
export const featuredCoachAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  if (!container) return tl;

  const image = container.querySelector("img");
  const line = container.querySelectorAll("hr")[0];
  const titleLine = container.querySelector("[class*='w-8']");
  const label = container.querySelector("[class*='text-secondary'][class*='uppercase']");
  const heading = container.querySelector("h2");
  const description = container.querySelector("[class*='text-red-200']");
  const stats = container.querySelectorAll("[class*='grid'][class*='grid-cols']")[0];

  tl.fromTo(
    image,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  )
    .fromTo(
      line,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
      0
    )
    .fromTo(
      titleLine,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
      0.1
    )
    .fromTo(
      label,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
      0.2
    )
    .fromTo(
      heading,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      0.25
    )
    .fromTo(
      description,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      0.35
    )
    .fromTo(
      stats,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      0.45
    );

  return tl;
};

// CoachCTA Animation - Certifications section
export const coachCTAAnimation = (container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  if (!container) return tl;

  const title = container.querySelector("h1");
  const certBlocks = container.querySelectorAll("[class*='p-6'][class*='rounded']");

  tl.fromTo(
    title,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  )
    .fromTo(
      certBlocks,
      { opacity: 0, scale: 0.8, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.5)", stagger: 0.1 },
      0.2
    );

  // Add hover scale to icons
  const icons = container.querySelectorAll("[class*='text-4xl']");
  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "back.out(1.7)" });
    });
    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });

  return tl;
};