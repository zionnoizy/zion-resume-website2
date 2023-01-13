//[1]https://vuejsdevelopers.com/2020/03/16/vue-js-tutorial/
import { createApp } from 'vue';
import App from './App.vue';
import Vue from 'vue'

const app = createApp(App);

// now you can see `vueApp` within the browser console
window.vueApp = app;

app.mount('#app');


Vue.loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")
Vue.loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js")
Vue.loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js")
Vue.loadScript("https://kit.fontawesome.com/b4d42f1d6e.js")
Vue.loadScript("https://cdn.tailwindcss.com")