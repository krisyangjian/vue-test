import App from './app.vue'
import Bpp from './b.vue'
import Vue from 'vue'


import './test.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.component('app', App);
Vue.component('bpp', Bpp);
new Vue({
    el: '#app',
    template: '<div id="app"><app></app></div>',
    mounted: function() {
    },
    computed: {
    }
 });
