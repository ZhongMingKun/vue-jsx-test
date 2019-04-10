/* eslint-disable no-new */
import Vue from 'vue'
import { default as responsive } from './responsive'

export default Vue.component('Hellotest', {
  props: {
    level: {
      type: Number,
      default: 3
    },
    term: {
      type: String,
      default: ''
    },
    detail: {
      type: String,
      default: ''
    }
  },
  render: function (h) {
    const column = responsive[this.level]

    return h(
      'a-col',
      {
        attrs: {
          ...column
        }
      },
      [
        this.$slots.term ? h('div', {class: 'term'}, this.$slots.term) : <div class="term">{this.term}</div>,
        this.$slots.detail ? h('div', {class: 'detail'}, this.$slots.detail) : <div class="detail">{this.detail}</div>
      ]
    )
  }
})
