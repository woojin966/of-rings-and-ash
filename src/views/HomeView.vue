<template>
    <div class="body_wrap">
        <Header />
        <HeroSection />
        <Character />
        <Trillogy />
        <Keyword />
        <Relic />
        <End />
        <Final />
        <Footage />
        <Footer />
    </div>
</template>

<script setup>
    import Header from '@/components/layout/Header.vue'
    import HeroSection from '@/components/sections/HeroSection.vue'
    import Character from '@/components/sections/Character.vue'
    import Trillogy from '@/components/sections/Trillogy.vue'
    import Keyword from '@/components/sections/Keyword.vue'
    import Relic from '@/components/sections/Relic.vue'
    import End from '@/components/sections/End.vue'
    import Final from '@/components/sections/Final.vue'
    import Footage from '@/components/sections/Footage.vue'
    import Footer from '@/components/layout/Footer.vue'
</script>