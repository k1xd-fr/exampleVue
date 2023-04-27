import VModal from './VModal.vue'
import VBackdrop from './VBackdrop.vue'

const components = [
  {
    name: 'VModal',
    component: VModal
  },
  {
    name: 'VBackdrop',
    component: VBackdrop
  }
]
export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
