import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.filter("snippet",function(val){
	if(val.length>10){
				return val.slice(0,10)+'...';
	}else{
		return val;
	}
	})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
