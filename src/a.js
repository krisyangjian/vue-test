// import VueI18n from 'vue-i18n'

// let messages = {
//   'zh-CN': {
//     name: "杨剑"
//   },
//   'en': {
//     name: "yangjian"
//   }
// }
// export default {
//   install: function(Vue, options) {

//     Vue.use(VueI18n);

//     const i18n = new VueI18n({
//       locale: 'zh-CN',
//       messages
//     })

//     // console.log(i18n)
//     // console.log(i18n.locale)
//     Vue.options.i18n = i18n;
//     Vue.config.optionMergeStrategies.i18n = function(parent, child) {
//       return parent;
//     }
//   }
// }

// const setLocal = (lang) => {
//   let jjjj = "sads"
//   require.ensure([], (require) => {
//     const p = require(`./lang/${lang}`)
//     console.log(p.default.text);
//   }, lang)  
// }
// export {
//   setLocal
// }
export default {
  name: 'yangjian'
}
