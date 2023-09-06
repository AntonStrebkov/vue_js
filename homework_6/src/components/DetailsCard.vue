<template>
  <div>
    <CardComponent :cards="cards" />
  </div>
</template>

<script>
export default {
  name: "DetailsCard",
  props: {
    cards: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
