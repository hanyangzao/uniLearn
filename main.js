import Vue from 'vue'
import App from './App'
import { myRequest,appId,appSecret } from './util/api.js'

//接口相关
Vue.prototype.$myRuquest = myRequest
Vue.prototype.appId = appId
Vue.prototype.appSecret = appSecret
Vue.prototype.myKey='app_id='+appId+'&app_secret='+appSecret

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
