<template>
    <section ref="sectionRef" class="hero_wrapper">
        <div class="scroll_trigger hero_inner">
            <div class="scroll_target">
                <div class="hero_logo">
                <img src="" alt="OF RELIC AND ASH" />
            </div>
            <div class="hero_content">
                <div class="highlight_pin">
                    <p class="medium n text_highlight">An Interactive Fantasy Chronicle</p>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref } from 'vue';
import { useSectionGsap } from '@/utils/useSectionGsap';

    const sectionRef = ref(null);

useSectionGsap(sectionRef, {
  init() {
    // gsap.to('.scroll_target', {
    //   scrollTrigger: {
    //     trigger: '.scroll_trigger',
    //     scrub: true,
    //     pin: true,
    //   },
    //   scale: 0.9,
    // });
  },
});

</script>
<style scoped lang="scss">
    @import '../../styles/components/Hero.scss';
</style>