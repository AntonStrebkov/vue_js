<template>
  <div>
    <HeaderComponent />
    <div class="details">
      <h2 class="details__header">{{ header }}</h2>
      <p class="details__text">{{ text }}</p>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  name: "ProjectDetails",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    ...mapState(["header", "text"]),
  },
  components: { HeaderComponent, FooterComponent },
};
</script>

<style lang="scss" scoped></style>
