<template>
  <app-navigation />
  <main class="min-h-screen max-w-screen-xl py-12 px-4 md:px-8 mx-auto">
    <router-view />
  </main>
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/components/organisms/AppNavigation.vue";
import AppFooter from "@/components/organisms/AppFooter.vue";

export default defineComponent({
  components: { AppNavigation, AppFooter },
});
</script>
