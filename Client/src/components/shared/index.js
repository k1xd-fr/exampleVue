import VInput from './VInput.vue'
import VButton from './VButton.vue'
import VLogo from './VLogo.vue'
import VHamburger from './VHamburger.vue'

const components = [
  {
    name: 'VInput',
    component: VInput
  },
  {
    name: 'VButton',
    component: VButton
  },
  {
    name: 'VLogo',
    component: VLogo
  },
  {
    name: 'VHamburger',
    component: VHamburger
  }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
