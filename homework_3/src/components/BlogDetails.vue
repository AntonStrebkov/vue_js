<template>
  <div class="blog-details">
    <div class="blog-details-content">
      <div class="blog-details-content-top">
        <div class="blog-details-content-top__content">
          <svg
            width="74"
            height="56"
            viewBox="0 0 74 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
              fill="#CDA274"
            />
          </svg>
          <p class="blog-details-content-top__text">
            The details are not the details. They make the design.
          </p>
        </div>
      </div>
      <div class="blog-details-content-main">
        <p class="blog-details-content-main__header">
          {{ blog.detailsHeader }}
        </p>
        <p class="blog-details-content-main__text">
          {{ blog.detailsText }}
        </p>
      </div>
      <div class="blog-details-content-sub">
        <div class="blog-details-content-sub-img-wrapper">
          <img
            class="blog-details-content-sub-img"
            :src="blog.detailsImg"
            alt="sub"
          />
        </div>
        <p class="blog-details-content-sub__text">
          {{ blog.detailsSubText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetails",
  props: ["blog"],
  methods: {
    showDetails(id) {
      this.$emit("showFullBlog", id);
    },
  },
};
</script>

<style scoped lang="scss">
.blog {
  &-details {
    &-content {
      &-top {
        display: flex;
        padding: 53px 227px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        background: #f4f0ec;
        margin-bottom: 27px;

        &__content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        &__text {
          color: #cda274;
          text-align: center;
          font-family: DM Serif Display, sans-serif;
          font-size: 25px;
          font-style: italic;
          font-weight: 400;
          line-height: 125%; /* 31.25px */
          letter-spacing: 0.5px;
        }
      }

      &-main {
        margin-bottom: 44px;

        &__header {
          color: #292f36;
          font-family: DM Serif Display, sans-serif;
          font-size: 50px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%; /* 62.5px */
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        &__text {
          color: #4d5053;
          font-family: Jost, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 33px */
          letter-spacing: 0.22px;
        }
      }

      &-sub {
        &-img {
          border-radius: 50px;
          width: 100%;

          &-wrapper {
            margin-bottom: 35px;
          }
        }

        &__text {
          color: #4d5053;
          font-family: Jost, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 33px */
          letter-spacing: 0.22px;
        }
      }
    }
  }
}
</style>
