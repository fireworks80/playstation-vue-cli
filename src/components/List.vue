<template>
  <section class="list-wrap">
    <h2 class="a11y">게임 목록</h2>
    <ul class="list">
      <li class="list__item" v-for="(title, idx) in titles" :key="idx">
        <a href class="prd">
          <img class="prd__img" :src="'/images/' + title.type + '/' + title.img" :alt="title.name">
          <p>
            <em class="prd__title">{{title.name | textEllipsis}}</em>
            <span class="prd__price">{{title.price | currency}}</span>
          </p>
        </a>
        <button @click="toggleLike(title)" class="like" type="button">
          <HeartOutline v-if="!title.like"></HeartOutline>
          <Heart v-else></Heart>
        </button>
      </li>
    </ul>
  </section>
</template>
<script>
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'List',
  components: {
    HeartOutline,
    Heart
  },
  created() {
    this.$store.dispatch('fetch')
  },
  computed: mapGetters({
    titles: 'filteredTitles'
  }),
  filters: {
    textEllipsis(text) {
      // console.log(text.length);
      const textLength = 20
      return text.length > textLength ? text.slice(0, textLength) + '...' : text
    },
    currency(price) {
      if (!price) return '무료'

      let strPrice = price + ''
      let point = strPrice.length % 3
      let str = strPrice.substring(0, point)

      while (point < strPrice.length) {
        str += str ? ',' : ''
        str += strPrice.substring(point, point + 3)
        point += 3
      }
      return str + '원'
    }
  },
  methods: {
    ...mapActions(['toggleLike'])
  }
}
</script>
<style lang="scss" scoped>
.list {
  &-wrap {
    flex: 1 1 80%;
  }
  display: flex;
  flex-wrap: wrap;
  padding-top: 24px;
  color: #fff;
  line-height: 1.5;

  &__item {
    @include relative;
    width: 50%;
  }
}

.prd {
  // @include debug;
  @include size($h: 264px);
  @include relative;
  display: block;

  margin: 0 10px 30px;
  background-color: rgba(255, 255, 255, 0.1);
  color: inherit;
  font-size: 0.8em;
  outline: transparent solid 4px;
  transition: all 0.87s;

  &:hover {
    outline-color: #fff;
  }

  &__img {
    width: 100%;
    margin-bottom: 10px;
  }

  &__title {
    display: block;
    padding: {
      left: 5px;
      right: 5px;
    }
    margin-bottom: 10px;
    font-style: normal;
    word-break: break-all;
  }

  &__price {
    // @include debug;
    @include absolute($bottom: 0, $left: 0, $right: 0);
    padding: 5px 0 5px 10px;
    background-color: rgba(255, 255, 255, 0.2);
    letter-spacing: 1px;
  }
}

.like {
  @include absolute($bottom: 60px, $right: 15px);
  padding: 0;
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
}

.material-design-icon {
  font-size: 1.5em;
}

@media (min-width: 450px) and (max-width: 640px) {
  .list__item {
    width: 33.3333%;
  }
}

@include respondTo(tablet) {
  .list {
    &-wrap {
      max-width: 90%;
    }

    &__item {
      width: 25%;
    }
  }
}

@include respondTo(small-pc) {
  .list__item {
    width: 20%;
  }
}
</style>
