import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import yanglaofuwuList from '../pages/yanglaofuwu/list'
import yanglaofuwuDetail from '../pages/yanglaofuwu/detail'
import yanglaofuwuAdd from '../pages/yanglaofuwu/add'
import xuanzefuwuList from '../pages/xuanzefuwu/list'
import xuanzefuwuDetail from '../pages/xuanzefuwu/detail'
import xuanzefuwuAdd from '../pages/xuanzefuwu/add'
import hulirenyuanList from '../pages/hulirenyuan/list'
import hulirenyuanDetail from '../pages/hulirenyuan/detail'
import hulirenyuanAdd from '../pages/hulirenyuan/add'
import fuwuleixingList from '../pages/fuwuleixing/list'
import fuwuleixingDetail from '../pages/fuwuleixing/detail'
import fuwuleixingAdd from '../pages/fuwuleixing/add'
import jiankangzhuangkuangList from '../pages/jiankangzhuangkuang/list'
import jiankangzhuangkuangDetail from '../pages/jiankangzhuangkuang/detail'
import jiankangzhuangkuangAdd from '../pages/jiankangzhuangkuang/add'
import shequList from '../pages/shequ/list'
import shequDetail from '../pages/shequ/detail'
import shequAdd from '../pages/shequ/add'
import fuwuquyuList from '../pages/fuwuquyu/list'
import fuwuquyuDetail from '../pages/fuwuquyu/detail'
import fuwuquyuAdd from '../pages/fuwuquyu/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussyanglaofuwuList from '../pages/discussyanglaofuwu/list'
import discussyanglaofuwuDetail from '../pages/discussyanglaofuwu/detail'
import discussyanglaofuwuAdd from '../pages/discussyanglaofuwu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'yanglaofuwu',
					component: yanglaofuwuList
				},
				{
					path: 'yanglaofuwuDetail',
					component: yanglaofuwuDetail
				},
				{
					path: 'yanglaofuwuAdd',
					component: yanglaofuwuAdd
				},
				{
					path: 'xuanzefuwu',
					component: xuanzefuwuList
				},
				{
					path: 'xuanzefuwuDetail',
					component: xuanzefuwuDetail
				},
				{
					path: 'xuanzefuwuAdd',
					component: xuanzefuwuAdd
				},
				{
					path: 'hulirenyuan',
					component: hulirenyuanList
				},
				{
					path: 'hulirenyuanDetail',
					component: hulirenyuanDetail
				},
				{
					path: 'hulirenyuanAdd',
					component: hulirenyuanAdd
				},
				{
					path: 'fuwuleixing',
					component: fuwuleixingList
				},
				{
					path: 'fuwuleixingDetail',
					component: fuwuleixingDetail
				},
				{
					path: 'fuwuleixingAdd',
					component: fuwuleixingAdd
				},
				{
					path: 'jiankangzhuangkuang',
					component: jiankangzhuangkuangList
				},
				{
					path: 'jiankangzhuangkuangDetail',
					component: jiankangzhuangkuangDetail
				},
				{
					path: 'jiankangzhuangkuangAdd',
					component: jiankangzhuangkuangAdd
				},
				{
					path: 'shequ',
					component: shequList
				},
				{
					path: 'shequDetail',
					component: shequDetail
				},
				{
					path: 'shequAdd',
					component: shequAdd
				},
				{
					path: 'fuwuquyu',
					component: fuwuquyuList
				},
				{
					path: 'fuwuquyuDetail',
					component: fuwuquyuDetail
				},
				{
					path: 'fuwuquyuAdd',
					component: fuwuquyuAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussyanglaofuwu',
					component: discussyanglaofuwuList
				},
				{
					path: 'discussyanglaofuwuDetail',
					component: discussyanglaofuwuDetail
				},
				{
					path: 'discussyanglaofuwuAdd',
					component: discussyanglaofuwuAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
