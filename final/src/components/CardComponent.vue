<template>
  <div class="cards__flex center">
    <div class="card" v-for="card in cards" :key="card.id">
      <img :src="card.img" alt="img" />
      <p class="card__title">{{ card.title }}</p>
      <p class="card__text">{{ card.text }}</p>
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
        <path
          d="M32 44L40 35L32 26"
          stroke="#292F36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["cards"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.cards__flex {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.card {
  &__title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
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
