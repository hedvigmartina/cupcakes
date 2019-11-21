<template>
    <div class="Hero">
        <Slider
            animation="fade"
            v-model="sliderValue"
            :duration="5000"
            :speed="1000"
        >
            <SliderItem
                v-for="(i, index) in list"
                :key="index"
                @click="changeIndex(1);"
                :style="i"
            >
                <p style="line-height: 150px; font-size: 5rem; text-align: center;">
                    Lite text...
                </p>
            </SliderItem>
        </Slider>
    </div>

</template>

<script>

import { Slider, SliderItem } from "vue-easy-slider";

export default {
    name: 'Hero',
    components: {
        Slider,
        SliderItem
    },
  data() {
    return {
      list: [],
      sliderValue: 1
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundColor: "tomato",
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "gold",
            width: "100%",
            height: "100%"
          }
        ]),
      3000
    );
  }
}

</script>

<style lang="scss" scoped>

.Hero {
    padding-bottom: 100px;
    margin-bottom: 50px;
}

</style>