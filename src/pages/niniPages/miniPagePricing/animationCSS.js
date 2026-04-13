/* ── Animations CSS injectées une seule fois ── */
const styles = `
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes underlineGrow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 40px 0 #E8000D40; }
    50%       { box-shadow: 0 0 60px 10px #E8000D80; }
  }

  .anim-hero-title   { animation: fadeInDown 0.8s ease both; }
  .anim-hero-sub     { animation: fadeInUp  0.8s ease 0.3s both; }
  .anim-hero-bar     { animation: underlineGrow 0.6s ease 0.5s both; transform-origin: left; }
  .anim-hero-toggle  { animation: fadeInUp  0.7s ease 0.5s both; }

  .anim-card-left    { animation: slideInLeft 0.7s ease both; }
  .anim-card-center  { animation: scaleIn    0.7s ease 0.15s both; }
  .anim-card-right   { animation: slideInRight 0.7s ease 0.05s both; }

  .anim-card-left,
  .anim-card-center,
  .anim-card-right   { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .anim-card-left:hover,
  .anim-card-right:hover { transform: translateY(-6px); box-shadow: 0 12px 32px #00000060; }
  .anim-card-center:hover { transform: translateY(-6px) scale(1.01); }
  .anim-card-center  { animation: scaleIn 0.7s ease 0.15s both, pulse-glow 3s ease-in-out 1s infinite; }

  .anim-row { opacity: 0; transform: translateX(-20px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .anim-row.visible { opacity: 1; transform: translateX(0); }

  .anim-faq { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .anim-faq.visible { opacity: 1; transform: translateY(0); }

  .anim-cta { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .anim-cta.visible { opacity: 1; transform: translateY(0); }

  .btn-select { transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease; }
  .btn-select:hover { background: #E8000D; color: #fff; transform: scale(1.03); }

  .btn-pro { transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease; }
  .btn-pro:hover { background: #f0f0f0; transform: scale(1.03); }

  .btn-cta { transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease; }
  .btn-cta:hover { background: #fff; color: #E8000D; transform: scale(1.04); }

  .toggle-btn { transition: background 0.25s ease, color 0.25s ease; }
  .toggle-btn:hover { background: #E8000D; color: #fff; }
`;

export default styles;