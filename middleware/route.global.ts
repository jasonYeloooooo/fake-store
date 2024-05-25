export default defineNuxtRouteMiddleware((to, from) => {
  // 首页重定向
  if (to.path === '/') {
    return navigateTo('/login')
  }
})
