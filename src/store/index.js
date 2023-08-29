// store.js
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      SDModel: [
        {
          content: 'punkmix模型',
          options: [
            {
              content: 'txt',
              tips: [
                {
                  content: 'flower, 1girl, tree',
                  steps: [40, 60],
                },
                {
                  content: 'school desk, 1girl, book',
                  steps: [40, 60],
                },
              ],
            },
            {
              content: 'img',
              tips: [
                {
                  content: 'flower, 1girl, tree',
                  steps: [40, 60],
                },
              ],
            },
          ],
        },
        {
          content: 'meinav9模型',
          options: [
            {
              content: 'txt',
              tips: [
                {
                  content: 'school desk, open book',
                  steps: [40],
                },
                {
                  content: 'school desk, 1girl, book',
                  steps: [60],
                },
                {
                  content: 'pink flower, tree',
                  steps: [40, 60],
                },
              ],
            },
            {
              content: 'img',
              tips: [
                {
                  content: 'pink flower, tree',
                  steps: [40, 60],
                },
              ],
            },
          ],
        },
      ],
      promptWords: [],
      currentModel: '',
      currentoption: 'txt',
      CLIPvolume: 0,
      // 可以添加其他需要共享的状态
    }
  },
  mutations: {
    setCurrentModel(state, value) {
      state.currentModel = value
      // console.log(state.currentModel)
    },
    setCurrentOption(state, value) {
      state.currentoption = value
    },
    setpromptWords(state, value) {
      state.promptWords = value
      console.log(state.promptWords)
    },
    // 可以添加其他 mutations 来修改状态
  },
  actions: {
    // 可以添加 actions 来处理异步操作
  },
})

export default store
