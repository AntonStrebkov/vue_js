<template>
  <div class="blog" @click="showDetails(blog.id)">
    <div class="blog-content">
      <div class="blog-header">
        <p class="blog-header__text">{{ blog.header }}</p>
      </div>
      <div class="blog-content-img-wrapper">
        <img class="blog-content-img" :src="blog.img" alt="blog-img" />
      </div>
      <div class="blog-footer">
        <div class="blog-date">
          <p class="blog-date__text">
            {{ blog.date }}
          </p>
        </div>
        <div class="blog-crumbs">
          <p class="blog-crumbs__text">
            {{ blog.crumbs }}
          </p>
        </div>
      </div>
      <div class="blog-text">
        {{ blog.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogComponent",
  props: ["blog"],
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    showDetails(id) {
      this.$emit("showFullBlog", id);
    },
  },
};
</script>

<style scoped lang="scss">
.blog {
  cursor: pointer;

  margin: 0 0 45px 0;

  &-content {
    &-img {
      width: 100%;
      border-radius: 50px;
      &-wrapper {
        margin-bottom: 46px;
      }
    }
  }

  &-header {
    margin-bottom: 21px;
    &__text {
      color: #292f36;
      font-family: DM Serif Display, sans-serif;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }
  }

  &-footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
  }

  &-date {
    &__text {
      color: #4d5053;
      font-family: Jost, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }

  &-crumbs {
    &__text {
      color: #4d5053;
      font-family: Jost, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }

  &-text {
    color: #4d5053;
    font-family: Jost, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
</style>
