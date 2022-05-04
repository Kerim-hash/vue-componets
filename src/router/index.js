import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import Products from '../views/Shop.vue'
import Product from '../views/Product.vue'
import Register from '../views/Register.vue'
import Modal from '../views/Modal.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
 
  {
    path: '/blog/:id',
    name: 'blog',
    component: Blog,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products,
    meta: {
      title: 'Products'
    }
  },
  {
    path: '/shop/:id',
    name: 'Product',
    component: Product,
    meta: {
      title: 'Product'
    }
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
    meta: {
      title: 'Modal'
    }
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      title: 'Users'
    }
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router
