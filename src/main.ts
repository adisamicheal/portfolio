import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createMetaManager } from 'vue-meta'
import VueAnalytics from 'vue-analytics';

createApp(App).use(store).use(router).use(createMetaManager()).use(VueAnalytics as any, {
    id: '354369322',
    router
}).mount('#app')
