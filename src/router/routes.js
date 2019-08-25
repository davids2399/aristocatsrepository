
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', redirect: '/beer' },
      { path: 'beer', component: () => import('pages/Brews.vue') },
      { path: 'beerPrediction', component: () => import('pages/Brews.vue') },
      { path: 'store', component: () => import('pages/Store.vue') },
      { path: 'storePrediction', component: () => import('pages/Store.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
