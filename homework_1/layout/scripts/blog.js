Vue.component("blog", {
  props: ["curentTagName"],
  data() {
    return {
      tags: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bedroom",
      ],
      curentTagName: "",
    };
  },

  template: `
  <aside class="tag center">          
  <h3 class="tag__heading">Tags</h3>
  <div class="tag__flex">
      <button @click="curentTagName = tag" class="tag__button" v-for="(tag, index) in tags" :key="index">
          {{tag}}
      </button>
  </div>
</aside> 
  `,
});
