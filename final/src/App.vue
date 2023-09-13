<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script></script>

<style lang="scss">
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
  //   font-family: Avenir, Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  // }

  // nav {
  //   padding: 30px;

  //   a {
  //     font-weight: bold;
  //     color: #2c3e50;

  //     &.router-link-exact-active {
  //       color: #42b983;
  //     }
  //   }
}
</style>
