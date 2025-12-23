<template>
    <Teleport to="body">
        <div v-if="open" id="character_modal" class="modal_wrap">
        <div class="modal_backdrop" @click="$emit('close')"></div>
        <div class="modal_content">
            <img />
             <!-- <img :src="props.character.image" alt="" /> -->
            <p class="big sb">{{ props.character.description_title }}</p>
            <p class="text n">{{ props.character.description }}</p>
        </div>
    </div>
    </Teleport>
</template>
<script setup>
    const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  character: {
    type: Object,
    default: null,
  },
});

</script>
<style></style>