import App from './app.vue'
// import Bpp from './b.vue'
import Vue from 'vue'
// import './test.css'
// import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';
import Plug from './a.js';
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import VueI18n from 'vue-i18n'

// Vue.use(VueI18n)


// const messages = {
//   'en': {},
//   'zh-CN': "{}"
// }

// // console.log(megs)
// const i18n = new VueI18n({
//   locale: 'zh-CN',
//   messages
// })
// Vue.use(ElementUI);
// Vue.component('app', App);

// let info = {
//     name: "yangjian"
// }

// Vue.config.silent = true;
// Vue.extend({
//     i18n
// })
Vue.use(Plug);
  
//   console.log(info.name)
// console.log(Vue.use(Plug))
// console.log(new Vue().$i18n);
// Object.defineProperty(Vue.prototype, '$i18n', {
//     set: function(value) {
//         this.$i18n = value;
//     },
//     get: function(){
//         return this.$i18n;
//     }
// })
// Vue.prototype._i18n = i18n;
// console.log(Vue.options)
// const i18n = Vue.options.i18n
// function TTT() {

// }
// Vue.options.ttt = new TTT();
debugger;
new Vue({
    el: '#app',
    // i18n: Vue.options.i18n,
    template: '<div id="app"></div>',
    beforeCreate() {
    },
    mounted() {
        console.log(this.$i18n.locale)
    }
 });
// console.log(Vue.options)