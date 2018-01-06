import VueI18n from 'vue-i18n'

export default {
  install: function(Vue, options) {

    Vue.use(VueI18n);

    const i18n = new VueI18n({
      locale: 'zh-CN',
      messages: {
        'zh-CN': {}
      }
    })

    // console.log(i18n)
    // console.log(i18n.locale)
    Vue.options.i18n = i18n;
    Vue.config.optionMergeStrategies.i18n = function(parent, child) {
      return parent;
    }
  }
}