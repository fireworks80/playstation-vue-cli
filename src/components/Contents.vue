<template>
  <main>
    <section class="l-wrap">
      <h2>게임</h2>
      <div class="l-flex-con">
        <Sidebar :isActive="isActive"></Sidebar>
        <List></List>
        <button @click="toggleOptions" class="btn-option" type="button">+</button>
      </div>
    </section>
  </main>
</template>
<script>
import Sidebar from './Sidebar'
import List from './List'
export default {
  name: 'Contents',
  data() {
    return {
      isActive: false
    }
  },
  components: {
    Sidebar,
    List
  },
  methods: {
    toggleOptions() {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  min-height: 100%;
  padding-top: 165px;
  // margin-bottom: -292px;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(0, 21, 54, 1) 100%
  );
}

.l-wrap {
  // display: none;
  padding-bottom: 50px;
}

.l-flex-con {
  // @include debug(green);
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}

@include respondTo(tablet) {
  .l-flex-con {
    justify-content: center;
  }
}

@media (max-width: 750px) {
  .btn-option {
    @include fixed($top: 78px, $right: 10px);
    @include size(50px);
    padding: 0;
    border: 0;
    background-color: #fff;
    z-index: 5;
  }
}

@media (min-width: 751px) {
  .btn-option {
    display: none;
  }
}
</style>
