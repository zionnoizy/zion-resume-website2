import {createRouter, createWebHistory} from 'vue-router'



const router = createRouter({
    history: createWebHistory(),
  routes:[

      {path: "/", component: Login },
      {path: "/register", name: "Register", component: Register },

  
  ]

})

export default router