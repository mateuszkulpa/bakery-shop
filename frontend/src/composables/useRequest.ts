import { ref } from "vue";

export default function <T>(requestFn: () => Promise<T>) {
  const data = ref<T>();
  const pending = ref(false);
  const error = ref(false);

  requestFn().then((res) => {
    data.value = res;
  });

  return {
    data,
    pending,
    error,
  };
}
