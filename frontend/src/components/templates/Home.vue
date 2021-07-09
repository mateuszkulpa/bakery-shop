<template>
  <section class="grid lg:grid-cols-2">
    <div>
      <div class="mt-12 text-6xl font-extrabold leading-tight">
        <span
          class="
            text-transparent
            bg-clip-text bg-gradient-to-br
            from-pink-400
            to-red-600
          "
        >
          Najlepsze torty
        </span>
        <br />
        na zamówienie
      </div>
      <div class="mt-8 text-gray-600 text-2xl font-medium">
        Oferujemy najlepsze wypieki w okolicy z odbiorem osobistym oraz dowozem
        do Twojego domu
      </div>

      <app-button class="mt-12" tag="router-link" :to="{ name: 'Products' }">
        Zamów już dziś
      </app-button>
    </div>

    <div class="mt-12 lg:mt-4">
      <img src="@/assets/birthday_cake.svg" />
    </div>
  </section>

  <section class="mt-32">
    <section-title>Popularne torty</section-title>

    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      data-cy="popular-products"
    >
      <product-card
        v-for="product in featuredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="text-center">
      <app-button class="mt-12" tag="router-link" :to="{ name: 'Products' }">
        Zobacz wszystkie
      </app-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import AppButton from "@/components/atoms/AppButton.vue";
import Product from "@/types/product";
import ProductCard from "@/components/molecules/ProductCard.vue";
import SectionTitle from "@/components/atoms/SectionTitle.vue";

export default defineComponent({
  components: {
    AppButton,
    ProductCard,
    SectionTitle,
  },
  props: {
    featuredProducts: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
});
</script>
