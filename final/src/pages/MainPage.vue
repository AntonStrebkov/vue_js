<template>
  <div class="main">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from "@/components/MainComponent.vue";

export default {
  name: "MainPage",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { FooterComponent, HeaderComponent, MainComponent },
};
</script>

<style lang="scss" scoped></style>
