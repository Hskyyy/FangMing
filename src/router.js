import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Index from './views/Index'
import jtjj from './views/jtjj'
import ywfg from './views/ywfg'
import lxwm from './views/lxwm'
import ffsj from './views/ffsj'
import gcal from './views/gcal'
import gsdt from './views/gsdt'
import hydt from './views/hydt'
import jdbg from './views/jdbg'
import djwk from './views/djwk'
import xxyl from './views/xxyl'
import jzjj from './views/jzjj'
import scls from './views/scls'




Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home,children:[
      {path:'',component:Index},
      {path:'/jtjj',component:jtjj},
      {path:'/ywfg',component:ywfg},
      {path:'/lxwm',component:lxwm},
      {path:'/ffsj',component:ffsj},
      {path:'/gcal',component:gcal},
      {path:'/gsdt',component:gsdt},
      {path:'/hydt',component:hydt},
      {path:'/jdbg',component:jdbg},
      {path:'/djwk',component:djwk},
      {path:'/xxyl',component:xxyl},
      {path:'/jzjj',component:jzjj},
      {path:'/scls',component:scls}
    ],  
    }
  ]
})
