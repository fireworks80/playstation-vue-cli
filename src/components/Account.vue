<template>
  <div class="account">
    <!-- l-wrap -->
    <div class="l-wrap">
      <h1 class="a11y">Playstation Store</h1>
      <a href="/">
        <img src="../assets/svg/store-logo.svg" alt="playstation store">
      </a>

      <!-- account info -->
      <div class="account__info">
        <ul class="account__list">
          <li>
            <button class="btn-wish" :class="{'is-active': isActive}" @click="toggleWishList">
              <HeartOutline></HeartOutline>
              <span class="a11y">위시리스트</span>
              {{likesNum}}
            </button>
          </li>
          <li>
            <a href="#">
              <CartOutline></CartOutline>
              <span class="a11y">장바구니</span>
              0
            </a>
          </li>
          <li>
            <button class="account__btn" type="button" @click="toggleSubAccount">fireworks80</button>
            <ul class="account__sub-list" :class="{'is-show': isShowSubAccount}">
              <li v-for="(link, idx) in accountList" :key="idx">
                <a :href="link.url">{{link.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
        <form>
          <label>
            <input type="text" placeholder="검색">
          </label>
        </form>
        <PrevWish :isActive="isActive"></PrevWish>
      </div>
      <!-- // account info -->
    </div>
    <!-- // l-wrap -->
  </div>
</template>
<script>
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import CartOutline from 'vue-material-design-icons/CartOutline.vue'
import PrevWish from './PrevWish'
export default {
  name: 'Account',
  components: {
    HeartOutline,
    CartOutline,
    PrevWish
  },
  data() {
    return {
      subAccount: true,
      accountList: [
        { name: '계정설정', url: '#' },
        { name: '결제관리', url: '#' },
        { name: '정기서비스 관리', url: '#' },
        { name: '코드 번호 입력', url: '#' },
        { name: '다운로드 리스트', url: '#' },
        { name: '다운로드 대기열', url: '#' },
        { name: '로그아웃', url: '#' }
      ],
      isActive: false
    }
  },

  computed: {
    isShowSubAccount() {
      return !this.subAccount
    },
    likesNum() {
      return this.$store.getters.likesNum
    }
  },
  methods: {
    toggleSubAccount() {
      this.subAccount = !this.subAccount
    },
    toggleWishList() {
      this.isActive = !this.isActive

      document.documentElement.style.overflow = this.isActive ? 'hidden' : ''
      document.body.style.overflow = this.isActive ? 'hidden' : ''

    }
  }
}
</script>
<style lang="scss" scoped>
.account {
  padding: 20px 0;
  background-color: #000;
  border: solid rgba(255, 255, 255, 0.3);
  border-width: 1px 0 2px;
  color: #fff;
  text-align: center;

  &__info {
    @include relative;

    a {
      color: inherit;
    }
  } // info

  &__list {
    // @include debug;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    text-align: initial;

    & > li {
      // @include debug;
      @include relative;

      &:nth-child(n + 2) {
        padding-left: 15px;
        margin-left: 10px;

        &::before {
          @include absolute($left: 0, $top: 50%);
          @include size(1px, 50%);
          transform: translateY(-50%);
          content: '';
          display: block;
          background-color: #fff;
        }
      }

      &:last-child {
        @include relative;
      }
    }

    .material-design-icon {
      margin-right: 5px;
    }
  } // list

  &__btn {
    padding: 0;
    border: 0;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  &__sub-list {
    @include absolute($top: 100%, $left: 0);
    @include size(140%, auto);
    display: none;
    font-size: 14px;
    background-color: #000;

    &.is-show {
      display: block;
    }

    li:nth-child(5),
    li:nth-child(7) {
      border-top: 1px solid rgba(255, 255, 255, 0.5);
    }

    a {
      display: block;
      padding: 10px 0 10px 10px;
    }
  }
}

.btn-wish {
  padding: 0;
  background-color: transparent;
  border: 0;
  color: inherit;

  &::after {
    @include absolute($bottom: -20px, $left: 36%);
    display: none;

    border: {
      style: solid;
      width: 20px;
      top-color: transparent;
      right-color: transparent;
      bottom-color: #fff;
      left-color: transparent;
    }
    content: '';
  }

  &.is-active::after {
    display: block;
  }
}

@include respondTo(small-pc) {
  .account {
    text-align: initial;

    .l-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__list {
      justify-content: flex-end;
    }
  }
}
</style>
