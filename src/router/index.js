import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Rank from '@/components/Rank'
import newsDetail from '@/components/newsDetail'
import Statistics from '@/components/Statistics'

Vue.use(Router)

export default new Router({
  history: true,
  //mode: 'history',
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      navShow: true,
      title: "赛事直播"
    }
  },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        navShow: true,
        title: "篮球资讯"
      }
    },
    {
      path: '/newsdetail',
      name: 'newsDetail',
      component: newsDetail,
      meta: {
        title: "新闻详情"
      }
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      meta: {
        navShow: true,
        title: "球队战绩"
      }
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics,
      meta: {
        navShow: true,
        title: "数据统计"
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
