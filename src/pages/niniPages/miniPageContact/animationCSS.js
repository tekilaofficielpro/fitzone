const styles = `
      .reveal        { opacity: 0; transform: translateY(32px); transition: opacity 0.65s ease, transform 0.65s ease; }
      .reveal-left   { opacity: 0; transform: translateX(-40px); transition: opacity 0.65s ease, transform 0.65s ease; }
      .reveal-right  { opacity: 0; transform: translateX(40px);  transition: opacity 0.65s ease, transform 0.65s ease; }
      .is-visible    { opacity: 1 !important; transform: none !important; }
      .delay-1 { transition-delay: 0.1s; }
      .delay-2 { transition-delay: 0.2s; }
      .delay-3 { transition-delay: 0.3s; }
      .delay-4 { transition-delay: 0.45s; }
    `;

export default styles;