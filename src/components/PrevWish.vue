<template>
  <article class="wish-list" :class="{'is-active': isActive}">
    <h2 class="a11y">위시리스트</h2>
    <ul v-if="wishList.length">
      <li v-for="(item, idx) in wishList" :key="idx">
        <figure class="wish-item">
          <img
            class="wish-item__img"
            :src="'/images/' + item.type + '/' + item.img"
            alt="item.name"
          >
          <figcaption class="wish-item__desc">
            <p>{{item.name}}</p>
          </figcaption>
        </figure>
      </li>
    </ul>
    <p class="wish-list__no-title" v-else>선택한 상품이 없습니다.</p>
  </article>
</template>
<script>
export default {
  name: 'PrevWish',
  props: ['isActive'],
  computed: {
    wishList() {
      return this.$store.getters.wishList
    }
  }
}
</script>
<style lang="scss" scoped>
.wish-list {
  @include absolute($top: 40px, $left: 50%);
  @include size(90%, null);
  transform: translateX(-50%);
  display: none;
  background-color: #fff;
  color: initial;

  &.is-active {
    display: block;
  }

  ul {
    max-height: 400px;
    overflow: {
      y: auto;
      x: hidden;
    }
  }

  li:nth-child(n + 2) figure {
    border-top: 1px solid #ddd;
  }

  figure {
    margin: 0;
    padding-right: 10px;
    display: flex;
    align-items: center;
  }

  img {
    transform: scale(.7);
  }

  &__no-title {
    text-align: center;
  }
}

@media (min-width: 769px) {
  .wish-list {
    @include size(600px, null);
    top: 40px;
    // left: -410px;
    // transform: translateX(0);
  }
}

</style>

