import { gsap, ScrollTrigger } from './initGsap';

export function initCommonScroll() {
  gsap.utils.toArray('section').forEach((section) => {
    const trigger = section.querySelector('.scroll_trigger');
    const target = section.querySelector('.scroll_target');

    if (!trigger || !target) return;

    gsap.from(target, {
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        markers: true,
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  ScrollTrigger.refresh();
  console.log('GSAP INIT');
}
