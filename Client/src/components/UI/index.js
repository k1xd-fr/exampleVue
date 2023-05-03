import VModal from './VModal.vue'
import VBackdrop from './VBackdrop.vue'
import VPreLoader from './VPreLoader.vue'

const components = [
  {
    name: 'VModal',
    component: VModal
  },
  {
    name: 'VBackdrop',
    component: VBackdrop
  },
  {
    name:'PreLoader',
    component: VPreLoader
  }
]
export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
