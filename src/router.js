import {createRouter, createWebHistory} from 'vue-router'



const router = createRouter({
    history: createWebHistory(),
  routes:[

      {path: "/", component: Login },
      {path: "/news", name: "News", component: News },
      {path: "/project", name: "Project", component: Project },
      {path: "/profile", name: "Profile", component: Profile },

  
  ]

})

export default router