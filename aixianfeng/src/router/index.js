import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import HomeComponent from '@/components/home';   //将自定义的组件引入进来
import SendComponent from '@/components/send';
import CarComponent from '@/components/car';
import MyComponent from '@/components/my';
import WaterComponent from '@/components/water';
import FoodComponent from '@/components/food';
import MilkComponent from '@/components/milk';

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/home',        //将组件的路由配置好
      component:HomeComponent    //自定义一个组件（名称）
    },
    {
    	path:'/send',
    	component:SendComponent,
        children:[
            {
                path:'water',
                component:WaterComponent
            },
            {
                path:'food',
                component:FoodComponent
            },
            {
                path:'milk',
                component:MilkComponent
            },{
                path:'/',
                redirect:'/send/food'
            }
        ]
    },
    {
    	path:'/car',
    	component:CarComponent
    },
    {
    	path:'/my',
    	component:MyComponent
    },
    {
    	path:'/*',
    	redirect:'/home'
    }
  ]
})
export default router