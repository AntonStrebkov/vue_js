<template>
  <div class="carousel center">
    <HeaderComponent />
    <div class="details center">
      <h2 class="details__header">{{ header }}</h2>
      <p class="details__text">{{ text }}</p>
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Слайды со слотом img -->
      <!-- Обратите внимание на классы .d-block и .img-fluid, чтобы предотвратить выравнивание изображений по умолчанию в браузере -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../components/img/carousel.png"
            alt="слот изображения"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../components/img/carousel.png"
            alt="слот изображения"
          />
        </template> </b-carousel-slide
      ><b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../components/img/carousel.png"
            alt="слот изображения"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <FooterComponent />
  </div>
</template>

<script>
import { mapState } from "vuex";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "ProjectDetails",
  data() {
    return { slide: 0, sliding: null };
  },
  mounted() {},
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  computed: {
    ...mapState(["header", "text"]),
  },
  components: { HeaderComponent, FooterComponent },
};
</script>

<style lang="scss" scoped>
.details {
  &__header {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
</style>
