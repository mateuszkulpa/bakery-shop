import { ref } from "vue";

export default function <T>(requestFn: () => Promise<T>) {
  const data = ref<T>();
  const pending = ref(true);
  const error = ref(false);

  requestFn()
    .then((res) => {
      data.value = res;
    })
    .catch(() => {
      error.value = true;
    })
    .finally(() => {
      pending.value = false;
    });

  return {
    data,
    pending,
    error,
  };
}
