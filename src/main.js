import App from './app.vue'
// // import Bpp from './b.vue'
import Vue from 'vue'
// import './a.scss';
// // import 'element-ui/lib/theme-chalk/index.css';
// // import ElementUI from 'element-ui';
// // import { setLocal } from './a.js';
// // import enLocale from 'element-ui/lib/locale/lang/en'
// // import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// // import VueI18n from 'vue-i18n'

// // // import VBar from 'v-bar';
// // Vue.use(VueI18n)

// // const messages = {
// //   'en': {
// //       name: "yangjian"
// //   },
// //   'zh-CN': {
// //     name: "杨剑"
// //   }
// // }

// // // // console.log(megs)
// // const i18n = new VueI18n({
// //   locale: 'zh-CN',
// //   messages
// // })
// // console.log(Plug.name)
// // Vue.use(ElementUI);
Vue.component('app', App);
// // Vue.component('VBar', VBar);
// // Vue.use(Plug);

new Vue({
    el: '#app',
    // i18n,
    template: '<div id="app"><app></app></div>',
    beforeCreate() {
    },
    mounted() {
    }
 });
// // console.log(Vue.options)
// // const a = "en"
// // // setTimeout(() => {
// //     require.ensure([], (require) => {
// //         require("./a.js")
// //     }, a)    
// // }, 3000);

// // setLocal("zh-CN");

// // setTimeout(() => {
// //     setLocal("en");
// // },3000)



// import 'element-ui/lib/theme-chalk/index.css'
