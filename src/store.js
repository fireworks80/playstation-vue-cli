import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentType: 'game',
    titles: []
  },
  mutations: {
    fetch(state, {
      data
    }) {
      // console.log(data)
      state.titles = data
    },
    changeType(state, payload) {
      // console.log(payload)
      state.currentType = payload;
    }
  },
  getters: {
    likesNum(state) {
      // console.log(state)
      const likes = state.titles.filter(title => title.like);
      return likes.length;
    },
    filteredTitles(state) {
      return state.titles.filter(title => title.type === state.currentType)
    },
    wishList(state) {
      return state.titles.filter(title => title.like)
    }
  },
  actions: {
    fetch(store, payload) {
      // console.log('fetcu');
      axios.get('/api/titles')
        .then(res => {
          store.commit('fetch', res)
          // console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    toggleLike(store, payload) {
      payload.like = !payload.like;
      axios.put('/api/titles/' + payload.id, payload).then(res => {
          // console.log(res);
          if (res.statusText.toLocaleLowerCase() === 'ok') store.dispatch('fetch')
        })
        .catch(err => console.log(err))
    }
  }
})