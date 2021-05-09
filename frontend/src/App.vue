<template>
  <app-navigation />
  <main class="max-w-screen-xl mx-auto min-h-screen">
    <app-page>
      <router-view />
    </app-page>
  </main>
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/components/layout/AppNavigation.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AppPage from "@/components/layout/AppPage.vue";

export default defineComponent({
  components: { AppNavigation, AppFooter, AppPage },
});
</script>
