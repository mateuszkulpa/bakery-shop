<template>
  <div>homepage</div>
  <app-button tag="router-link" :to="{ name: 'Products' }">
    Zobacz produkty
  </app-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/atoms/app-button/AppButton.vue";

export default defineComponent({
  components: { AppButton },
});
</script>
