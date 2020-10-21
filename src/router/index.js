import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Main',
		component: () => import('../views/Index.vue'),
		children: [
			{
				path: '/',
				redirect: 'map'
			},
			{
				name: '404',
				path: '404',
				component: () => import('../views/404.vue'),
				meta: {
					title: '404',
					requireAuth: false
				}
			},
			{
				name: 'map',
				path: 'map',
				component: () => import('../views/Map.vue'),
				meta: {
					title: '地图',
					requireAuth: false
				}
			},
			{
				path: '*',
				redirect: '404'
			},
		]
	}
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + " - eMap - 易地图 - 上海工程技术大学"
  }
  next()
})
export default router
