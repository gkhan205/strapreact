import AlertComponent from './components/Alert'
import BadgeComponent from './components/Badge'
import DropdownComponent from './components/Dropdown'

export const componentRoutes = [
  {
    name: 'Alert',
    path: '/alert',
    component: AlertComponent,
  },
  {
    name: 'Badge',
    path: '/badge',
    component: BadgeComponent,
  },
  {
    name: 'Dropdown',
    path: '/dropdown',
    component: DropdownComponent,
  },
]
