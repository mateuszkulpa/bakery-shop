<template>
  <app-navigation />
  <main class="min-h-screen">
    <router-view />
  </main>
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/components/organisms/app-header/AppNavigation.vue";
import AppFooter from "@/components/organisms/app-footer/AppFooter.vue";

export default defineComponent({
  components: { AppNavigation, AppFooter },
});
</script>
