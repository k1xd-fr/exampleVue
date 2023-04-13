import CartIcon from "./CartIcon.vue"
import CodeIcon from "./CodeIcon.vue"
import HomeIcon from "./HomeIcon.vue"
import TeamIcon from "./TeamIcon.vue"
import CheckMarkIcon from "./CheckMarkIcon.vue"

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
    },
    {
      name: "CheckMark",
      component: CheckMarkIcon,
    }
  ]
  
  export default {
    install(app) {
      components.forEach(({ name, component }) => {
        app.component(name, component)
      })
    }
  }
