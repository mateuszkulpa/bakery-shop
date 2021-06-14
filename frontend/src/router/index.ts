import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/components/pages/home/Home.vue";
import Products from "@/components/pages/products/Products.vue";
import Product from "@/components/pages/product/Product.vue";
import Cart from "@/components/pages/cart/Cart.vue";
import Checkout from "@/components/pages/checkout/Checkout.vue";
import ThankYou from "@/components/pages/thank-you/ThankYou.vue";

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
