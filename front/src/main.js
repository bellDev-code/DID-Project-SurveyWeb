import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

// styles

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/tailwind.css';
// import 'bootstrap/dist/css/bootstrap.css';

// mouting point for the whole app

import App from '@/App.vue';

// layouts

import Admin from '@/layouts/Admin.vue';
import Auth from '@/layouts/Auth.vue';

// views for Admin layout

import Dashboard from '@/views/admin/Dashboard.vue';
import Settings from '@/views/admin/Settings.vue';
import Tables from '@/views/admin/Tables.vue';
import Maps from '@/views/admin/Maps.vue';

// views for Auth layout

import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import MyPage from '@/views/auth/MyPage.vue';

// views without layouts

import Landing from '@/views/Landing.vue';
import Profile from '@/views/Profile.vue';
import Index from '@/views/Index.vue';

// 기업용

// 공통사용

import Event from '@/views/total/Event.vue';
import Introduce from '@/views/total/Introduce.vue';

// routes

const routes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: Admin,
    children: [
      {
        path: '/admin/dashboard',
        component: Dashboard
      },
      {
        path: '/admin/settings',
        component: Settings
      },
      {
        path: '/admin/tables',
        component: Tables
      },
      {
        path: '/admin/maps',
        component: Maps
      },
      {
        path: '/admin/event',
        component: Event
      },
      {
        path: '/admin/introduce',
        component: Introduce
      }
    ]
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login
      },
      {
        path: '/auth/register',
        component: Register
      },
      {
        path: '/auth/myPage',
        component: MyPage
      },
      {
        path: '/auth/event',
        component: Event
      },
      {
        path: '/auth/introduce',
        component: Introduce
      }
    ]
  },
  {
    path: '/landing',
    component: Landing
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    component: Index
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app');
