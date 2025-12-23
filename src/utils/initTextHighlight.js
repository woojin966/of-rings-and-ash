import { gsap, ScrollTrigger } from './initGsap';

export function initTextHighlight() {
  gsap.utils.toArray('.highlight_pin').forEach((pin) => {
    const text = pin.querySelector('.text_highlight');

    if (!text) return;

    gsap.to(text, {
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: '+=500',
        pin: pin,
        scrub: true,
        markers: true,
        pinSpacing: true,
      },
      backgroundSize: '100% 100%',
      ease: 'none',
    });
  });

  ScrollTrigger.refresh();
}
