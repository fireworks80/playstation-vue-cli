<template>
  <section class="options" :class="{'is-active': isActive}">
    <h2 class="a11y">선택옵션</h2>
    <dl>
      <dt class="options__tit">{{types.name}}</dt>
      <dd class="options__con">
        <ul>
          <li v-for="(cur, idx) in types.type" :key="idx">
            <input @change="changeType(cur)" type="radio" :id="cur" name="type" :checked="currentType === cur">
            <label class="check-box" :for="cur">{{cur | translate}}</label>
          </li>
        </ul>
      </dd>
    </dl>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'sidebar',
  props: ['isActive'],
  data() {
    return {
      types: {
        name: '컨텐츠 유형',
        type: ['game', 'bundle']
      }
    }
  },
  computed: {
    currentType() {
      return this.$store.state.currentType
    }
  },
  filters: {
    translate(text) {
      return text === 'game' ? '게임' : '번들'
    }
  },
  methods: {
    ...mapMutations(['changeType'])
  }
}
</script>
<style lang="scss" scoped>
.options {
  // @include debug;
  flex: 1 1 20%;
  padding: 20px;
  background-color: inherit;
  color: #fff;
  line-height: 1.5;

  &__tit {
    padding-bottom: 10px;
    margin-bottom: 10px;
    opacity: 0.6;
    border-bottom: 1px solid #fff;
  }

  &__con {
    margin-bottom: 20px;
  }

  [type='radio'] {
    @include a11y;

    &:checked + .check-box::after {
      content: '✓';
    }
  }

  sup {
    font-size: 10px;
  }
}

.check-box {
  @include relative;

  &::before,
  &::after {
    content: '';
  }

  &::before {
    @include size(14px);
    display: inline-block;
    margin-right: 18px;
    border: 1px solid #fff;
    border-radius: 3px;
  }

  &::after {
    @include absolute($top: -4px, $left: 2px);
    font-size: inherit;
  }
}

@media (max-width: 750px) {
  .options {
    @include fixed($top: 140px, $right: 10px);
    background-color: rgba(255, 255, 255, .5);
    z-index: 5;
    display: none;

    &.is-active {
      display: block;
    }

    &::before {
      @include absolute($top: -20px, $right: 10px);
      background-color: transparent;
      border: {
        style: solid;
        width: 10px;
        bottom-color: rgba(255, 255, 255, .5);
        right-color: transparent;
        left-color: transparent;
        top-color: transparent;
      }
      content: '';
    }
  }
}
</style>

