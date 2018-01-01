import App from './app.vue'
// import Bpp from './b.vue'
import Vue from 'vue'


// import './test.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


const messages = {
  'en': enLocale,
  'zh-CN': zhLocale
}

// console.log(megs)
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages
})
Vue.use(ElementUI, {
  i18n: function(key,value) {
    return 'ss';
  }
});
new Vue({
    el: '#app',
    i18n,
    template: '<div id="app"></div>',
    mounted() {
      this.$confirm("确认删除", "确认", function(){}, function(){});
      setTimeout(() => {
        this.$i18n.locale = "en";
      })
    }
 });