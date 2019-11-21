<template>
  <div class="home">
    <Hero />

    <div class="Recipe-container container">
        <Recipe title="recept1" />
        <Recipe title="recept2" />
        <Recipe title="recept3" />
    </div>

    <Testimonial />

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Recipe from '@/components/Recipe.vue';
import Testimonial from '@/components/Testimonial.vue';

export default {
  name: "home",
  components: {
    Hero,
    Recipe,
    Testimonial
  }
};
</script>
