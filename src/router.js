import {createRouter, createWebHistory} from 'vue-router'
const App = () => import('@/App.vue');
const Project = () => import('@/views/Project.vue');
const Profile = () => import('@/views/Profile.vue');
const News = () => import('@/components/News.vue');


const router = createRouter({
    history: createWebHistory(),
  routes:[
      {path: "/", name: "App", component: App },
      {path: "/project", name: "Project", component: Project },
      {path: "/news", name: "News", component: News },
      {path: "/profile", name: "Profile", component: Profile },

  
  ]

})

export default router