<template>
  <div id="app">
    <HeaderComponent />
    <FooterComponent />
    <ProductDetails />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ProductDetails from "./components/ProductDetails.vue";

export default {
  name: "App",
  components: { HeaderComponent, FooterComponent, ProductDetails },
};
</script>

<style lang="css">
#app {
  font-family: "Jost", sans-serif;
  font-family: "DM Serif Display", serif;

  .center {
    padding-left: calc(50% - (1200px / 2));
    padding-right: calc(50% - (1200px / 2));
  }

  a {
    text-decoration: none;
  }
}
</style>
