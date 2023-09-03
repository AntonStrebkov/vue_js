Vue.component("blogs-list", {
  data() {
    return {
      props: {
        curentTagName: {
          type: String,
        },
      },

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
    <input type="text" v-model="curentTagName">
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

Vue.component("blog", {
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
      <div>
          <aside class="tag center">
              <h3 class="tag__heading">Tags</h3>
              <div class="tag__flex">
                  <button @click="curentTagName=tag"  class="tag__button" v-for="(tag, index) in tags"
                      :key="index">
                      {{tag}}
                  </button>
              </div>
          </aside>
          <blogs-list></blogs-list>
      </div>
        `,
});

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
        <div>
        <section class="article center">
        <div class="article__new" v-for="article in articles" :key="article.id">
            <h2 class="article__heading">{{ article.heading }}</h2>
            <img class="article__img" :src="article.url" alt="article">
            <p class="article__text">{{ article.date }}</p>
            <p class="article__content"> {{ article.itArticle }}</p>
        </div>
        </section>
        </div>
        `,
});

// new Vue({
//   el: "#details",
// });
