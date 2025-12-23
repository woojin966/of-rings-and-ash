<template>
    <section ref="sectionRef" class="character_wrapper">
        <div class="scroll_trigger character_inner">
            <div class="scroll_target">
                <div class="text_box">
            <h1>THE GATHERED</h1>
            <p class="medium n">Different paths. <br/>One moment of convergence.</p>
            </div>
        <div class="character_wrap">
            <ul class="character_list">
                <li
      v-for="character in characters"
      :key="character.id"
      class="character_item"
    >
                    <button
        class="trigger_btn"
        @click="openModal(character)"
      >
        View
      </button>
      <div class="character_card">
        <!-- <img :src="character.image" alt="" /> -->
        <h2>{{ character.title }}</h2>
      </div>
                </li>
            </ul>
        </div>
        <CharacterModal
  :open="isModalOpen"
  :character="activeCharacter"
  @close="closeModal"
/>
            </div>
    </div>
</section>
</template>
<script setup>
    import { ref } from 'vue';
import { characters } from '@/data/characters';
import { useSectionGsap } from '@/utils/useSectionGsap';
import CharacterModal from '@/components/ui/CharacterModal.vue';

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

const activeCharacter = ref(null);
const isModalOpen = ref(false);

const openModal = (character) => {
  activeCharacter.value = character;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  activeCharacter.value = null;
};
</script>
<style scoped lang="scss">
// @import '../../styles/components/';
</style>