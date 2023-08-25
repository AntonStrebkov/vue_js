Vue.component("blogs-list", {
  data() {
    return {
      subtitle: "Design sprints are great",
      subtitleText:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      lists: [
        "Kitchen Bedroom Kitchen Planning Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",

        "Kitchen Building Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",

        "Kitchen Architecture Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",

        "Kitchen Building Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",

        "Kitchen Bedroom Bedroom Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      ],
    };
  },

  template: `
  <div class="center">
  <h2 class="article__heading">{{subtitle}}</h2>
  <p class="article__content">{{subtitleText}}</p>
  <div>
  <input class="input-hidden" type="text" v-model="curentTagName">
  <ol>
    <li class="article__content"  v-for="article in filterArticles">
       {{article}}
    </li>
  </ol>
  </div>
</div>
  `,
  computed: {
    filterArticles() {
      return this.lists.filter((article) =>
        article.includes(this.curentTagName)
      );
    },
  },
});
