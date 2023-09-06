<template>
  <div class="blogs-list center">
    <div class="blogs-list-content">
      <div class="blogs-container" v-if="showDetails === false">
        <BlogComponent
          @showFullBlog="showAll"
          v-for="blog in filteredItems"
          :key="blog.id"
          :blog="blog"
        ></BlogComponent>
      </div>
      <div class="blogs-container" v-if="showDetails === true">
        <BlogComponent
          @showFullBlog="showAll"
          :blog="filteredBlog"
        ></BlogComponent>
        <BlogDetails :blog="filteredBlog"></BlogDetails>
      </div>
      <div class="tags-container">
        <div
          class="tag"
          :class="{ 'tag-clicked': tag === filterItem }"
          v-for="tag in getTags"
          :key="tag.id"
          @click="clickTag(tag)"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogComponent from "@/components/BlogComponent.vue";
import BlogDetails from "@/components/BlogDetails.vue";

export default {
  name: "BlogListComponent",
  components: {
    BlogDetails,
    BlogComponent,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          header: "#1 Let’s Get Solution for Building Construction Work",
          img: "img/blog-1.png",
          date: "26 December,2022",
          crumbs: "Interior / Home / Decore",
          text:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n" +
            "\n" +
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Bedroom", "Architecture", "Kitchen Planning"],
          detailsHeader: "#1 Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n" +
            "1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n" +
            "\n" +
            "2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n" +
            "3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n",
          detailsImg: "img/details-sub.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: 2,
          header: "#2 Let’s Get Solution for Building Construction Work",
          img: "img/article-2.png",
          date: "26 December,2023",
          crumbs: "Interior / Home / Decore",
          text:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n" +
            "\n" +
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Kitchen", "Bedroom", "Building"],
          detailsHeader: "#2 Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. <br><br>\n                    1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>",
          detailsImg: "img/card-2.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: 3,
          header: "#3 Let’s Get Solution for Building Construction Work",
          img: "img/article-3.png",
          date: "26 December,2022",
          crumbs: "Interior / Home / Decore",
          text:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n" +
            "\n" +
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Kitchen", "Building", "Kitchen Planning"],
          detailsHeader: "#3 Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. <br><br>\n                    1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>",
          detailsImg: "img/card-3.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
      ],
      filterItem: "",
      filterId: "",
      showDetails: false,
    };
  },
  computed: {
    getTags() {
      const tags = [];
      this.blogs.forEach((el) => {
        tags.push(...el.tags);
      });
      return new Set(tags);
    },

    filteredItems() {
      return this.blogs.filter((blog) => {
        if (this.filterItem === "") {
          return this.blogs;
        } else {
          return blog.tags.includes(this.filterItem);
        }
      });
    },

    filteredBlog() {
      const blog = this.blogs.filter((blog) => {
        return blog.id === Number(this.filterId);
      });

      return blog[0];
    },
  },

  methods: {
    clickTag(tag) {
      if (this.filterItem === tag) {
        this.filterItem = "";
      } else {
        this.filterItem = tag;
      }
    },

    showAll(id) {
      this.filterId === id ? (this.filterId = "") : (this.filterId = id);
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped lang="scss">
.blogs-list {
  margin-top: 100px;

  &-content {
    padding: 25px;
    display: flex;
    gap: 52px;
    justify-content: space-between;
  }
}

.blogs-container {
  width: 67%;
}

.tag {
  padding: 9px 30px;
  border-radius: 10px;
  background: #f4f0ec;
  color: #292f36;
  text-align: center;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  cursor: pointer;

  &:hover {
    background: #292f36;
    color: #fff;
    text-align: center;
    font-family: Jost, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }

  &-clicked {
    background: #292f36;
    color: #fff;
    text-align: center;
    font-family: Jost, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }
}

.tags-container {
  width: 33%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
}
</style>
