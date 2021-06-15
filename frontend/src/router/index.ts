import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/components/pages/Home.vue";
import Products from "@/components/pages/Products.vue";
import Product from "@/components/pages/Product.vue";
import Cart from "@/components/pages/Cart.vue";
import Checkout from "@/components/pages/Checkout.vue";
import ThankYou from "@/components/pages/ThankYou.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/:id/:slug",
    name: "Product",
    component: Product,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
