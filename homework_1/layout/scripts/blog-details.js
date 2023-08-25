Vue.component("blog-details", {
  data() {
    return {
      articles: [
        {
          id: 1,
          url: "img/details1.png",
          heading: "Let’s Get Solution for Building Construction Work",
          date: "26 December,2022",
          itArticle:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
      ],
    };
  },

  template: `
  <section class="article center">
  <div class="article__new" v-for="article in articles" :key="article.id">
      <h2 class="article__heading">{{ article.heading }}</h2>
      <img class="article__img" :src="article.url" alt="article">
      <p class="article__text">{{ article.date }}</p>
      <p class="article__content"> {{ article.itArticle }}</p>
  </div>
  </section>
  `,
});
