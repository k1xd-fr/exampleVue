import CartIcon from './CartIcon.vue'
import CodeIcon from './CodeIcon.vue'
import HomeIcon from './HomeIcon.vue'
import TeamIcon from './TeamIcon.vue'

import CheckMarkIcon from './CheckMarkIcon.vue'
import FaceBookIcon from './SocialIcons/FaceBookIcon.vue'
import TwitterIcon from './SocialIcons/TwitterIcon.vue'
import InstagramIcon from './SocialIcons/InstagramIcon.vue'
import InIcon from './SocialIcons/InIcon.vue'
import PinterestIcon from './SocialIcons/PinterestIcon.vue'

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
    name: 'CheckMark',
    component: CheckMarkIcon
  },
  {
    name: 'FaceBook',
    component: FaceBookIcon
  },
  {
    name: 'Twitter',
    component: TwitterIcon
  },
  {
    name: 'Instagram',
    component: InstagramIcon
  },
  {
    name: 'InIcon',
    component: InIcon
  },
  {
    name: 'Pinterest',
    component: PinterestIcon
  }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
