<template>
  <header class="top-header center">
    <div class="top-header__wrapper">
      <div class="top-header__logo">
        <a href="index.html"><img src="./img/Logo.svg" alt="Logo" /></a>
      </div>
      <!-- <div class="top-header__menu">
        <a href="index.html" class="top-header__link">Home </a>
        <a href="#" class="top-header__link">Project</a>
        <a href="blog.html" class="top-header__link">Blog</a>
      </div> -->
      <nav class="top-header__menu">
        <router-link class="top-header__link" to="/">Home</router-link> |
        <router-link class="top-header__link" to="/project"
          >Project</router-link
        >
        |
        <router-link class="top-header__link" to="/carousel">Blog</router-link>
      </nav>
      <router-view />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped>
.top-header {
  padding-top: 53px;
  padding-bottom: 56px;
}
.top-header__wrapper {
  display: flex;
  justify-content: space-between;
}

.top-header__menu {
  display: flex;
  gap: 25px;
}

.top-header__link {
  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
.top-header__link:hover {
  color: #cda274;
}
</style>
