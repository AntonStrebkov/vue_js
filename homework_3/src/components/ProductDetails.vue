<template>
  <div class="center">
    <p>
      {{ product.name }} <input type="number" v-model="product.count" min="0" />
      <span v-if="isAvalible()">Available</span>
      <span v-else>Out of stock</span>
    </p>
    <p>{{ formattedPrice }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",

  data() {
    return {
      product: {
        name: "Iphone X",
        price: 99.99,
        available: false,
        count: 1,
      },
    };
  },

  computed: {
    formattedPrice() {
      return `$${this.product.price}`;
    },
  },

  mounted() {},

  methods: {
    isAvalible() {
      if (this.product.count > 0) {
        return (this.product.available = true);
      } else {
        return (this.product.available = false);
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
