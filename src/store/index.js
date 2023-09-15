import { createStore } from 'vuex'

export default createStore({
  state: {
    isAudioPlaying: false,
  },
  mutations: {
    setAudioPlaying(state, isPlaying) {
      state.isAudioPlaying = isPlaying
    },
  },
  actions: {
    playAudio({ commit }) {
      commit('setAudioPlaying', true)
    },
    stopAudio({ commit }) {
      commit('setAudioPlaying', false)
    },
  },
  getters: {
    audioIsPlaying(state) {
      return state.isAudioPlaying
    },
  },
})
