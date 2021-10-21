import Vue from "vue";
import VueRouter from "vue-router";
import about from "../views/about.vue";
import cart from "../views/cart.vue";
import checkout from "../views/checkout.vue";
import contact from "../views/contact.vue";
import farmers from "../views/farmers.vue";
import gallery from "../views/gallery.vue";
import index from "../views/index.vue";
import index2 from "../views/index2.vue";
import index3 from "../views/index3.vue";
import index4 from "../views/index4.vue";
import index5 from "../views/index5.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "about",
    component: about,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: checkout,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/farmers",
    name: "farmers",
    component: farmers,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: gallery,
  },
  {
    path: "/index",
    name: "index",
    component: index,
  },
  {
    path: "/index2",
    name: "index2",
    component: index2,
  },
  {
    path: "/index3",
    name: "index3",
    component: index3,
  },
  {
    path: "/index4",
    name: "index4",
    component: index4,
  },
  {
    path: "/index5",
    name: "index5",
    component: index5,
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
