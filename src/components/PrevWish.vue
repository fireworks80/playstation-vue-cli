<template>
  <article class="wish" :class="{'is-active': isActive}">
    <h2 class="a11y">위시리스트</h2>
    <ul class="wish__list" v-if="wishList.length">
      <li class="wish__item" v-for="(item, idx) in wishList" :key="idx">
        <img class="wish__img" :src="'/images/' + item.type + '/' + item.img" alt="item.name">
        <p>{{item.name}}</p>
      </li>
    </ul>
    <p class="wish__no-content" v-else>선택한 상품이 없습니다.</p>
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
.wish {
  @include absolute($top: 40px, $left: 50%);
  @include size(90%, null);
  transform: translateX(-50%);
  display: none;
  background-color: #fff;
  color: initial;

  &.is-active {
    display: block;
  }

  &__list {
    max-height: 400px;
    overflow: {
      y: auto;
      x: hidden;
    }
  }

  &__item {
    display: flex;
    align-items: center;

    &:nth-child(n + 2) {
      border-top: 1px solid #ddd;
    }
  }

  &__img {
    transform: scale(0.7);
  }

  &__no-content {
    text-align: center;
  }
}

@media (min-width: 769px) {
  .wish {
    @include size(600px, null);
    top: 40px;
  }
}
</style>

