import { onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSectionGsap(sectionRef, options = {}) {
  let ctx;

  onMounted(() => {
    ctx = gsap.context(() => {
      options.init();
    }, sectionRef.value);
  });

  onBeforeUnmount(() => {
    ctx && ctx.revert();
  });
}
