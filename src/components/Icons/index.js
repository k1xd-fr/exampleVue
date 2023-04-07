import CartIcon from "./CartIcon.vue"
import CodeIcon from "./CodeIcon.vue"
import HomeIcon from "./HomeIcon.vue"
import TeamIcon from "./TeamIcon.vue"

const components = [
    {
      name: 'CartIcon',
      component: CartIcon
    },
    {
      name: 'CodeIcon',
      component: CodeIcon
    },
    {
      name: 'HomeIcon',
      component: HomeIcon
    },
    {
      name: 'TeamIcon',
      component: TeamIcon
    }
  ]
  
  export default {
    install(app) {
      components.forEach(({ name, component }) => {
        app.component(name, component)
      })
    }
  }
