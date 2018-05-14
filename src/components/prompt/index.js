import prompt from './prompt'
// var prompt = require('./prompt')
const Prompt = {}
Prompt.install = (Vue,options) => {
  const promptTpl = Vue.extend(prompt)
  let $vm, instance, timer = null;
  const init = () => {
    $vm = new promptTpl();
    let tpl = $vm.$mount().$el;
    document.querySelector('.page').appendChild(tpl);
    instance = true;
  }
  Vue.prototype.$Prompt = {
    show (options) {
      clearTimeout(timer);
      if (!instance) {
        init();
      }
      if (typeof options === 'string') {
        $vm.text = options;
      } else if (typeof options === 'object') {
        Object.assign($vm, options);
      }
      $vm.show = true;
      timer = setTimeout(() => {
  	    $vm.show = false;
  	  }, $vm.time)
    },
    hide () {
      $vm.show = false;
    }
  }
}
export default Prompt;