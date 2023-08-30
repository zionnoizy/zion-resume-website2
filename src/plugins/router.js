import {createRouter, createWebHistory} from 'vue-router'

const HomeScreen = () => import('@/views/HomeScreen.vue');
const ProjectScreen = () => import('@/views/ProjectScreen.vue');
//const News = () => import('@/components/News.vue');


const router = createRouter({
    history: createWebHistory(),
  routes:[
      {path: "/", name: "HomeScreen", component: HomeScreen },
      {path: "/project", name: "ProjectScreen", component: ProjectScreen },
      //{path: "/news", name: "News", component: News },
      //{path: "/profile", name: "Profile", component: Profile },

  
  ]

})

export default router