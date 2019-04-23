<template>
  <nav :class="{'is-active': isActive}">
    <button @click="showMenu" class="btn-nav" type="button">+</button>
    <h2 class="a11y">사이트 네비게이션</h2>
    <ul class="l-wrap">
      <li v-for="(data, idx) in gnbData" :key="idx">
        <a :href="data.url">{{data.name}}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Gnb',
  data () {
    return {
      gnbData: [
        { name: '맞춤추천', url: 'https://store.playstation.com/ko-kr/just-for-you' },
        { name: 'PlayStation®Plus', url: 'https://store.playstation.com/ko-kr/home/games/psplus' },
        { name: 'PlayStation®VR', url: '#' },
        { name: 'PS4', url: '#' },
        { name: 'PS3', url: '#' },
        { name: 'PS Vita/PSP', url: '#' }
      ],
      isActive: false
    }
  },
  methods: {
    showMenu() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    height: 38px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 1);
    transition: all .64s ease-in;

    .btn-nav {
      @include relative;
      width: 100%;
      padding: 0 0 0 20px;
      background-color: transparent;
      border: 0;
      color: #fff;
      font-size: 2em;
      text-align: initial;
    }

    &.is-active {
      height: 264px;
    }
  }

  .l-wrap {

    li {
      padding-left: 20px;

      &:nth-child(2) a {
        padding-left: 30px;
        background: url(/images/plusIcon.png) no-repeat left center;
      }

      &:hover {
        background-color: #3b3b3b;
      }
    }

    a {
      display: block;
      padding: 10px;
      color: rgba(255, 255, 255, .7);
    }
  }

@media (min-width: 768px) {
  nav {
    height: auto;
    overflow: initial;
    background-color: rgba(0, 0, 0, .5);

    .btn-nav {
      display: none;
    }

    &.is-active {
      height: auto;
    }
  }

  .l-wrap {
    display: flex;
    justify-content: space-between;

    li {
      padding-left: 0;
    }
  }
}
</style>
