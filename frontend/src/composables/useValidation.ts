import { computed, readonly, ref, Ref, watch } from "vue";
import { BaseSchema, ValidationError } from "yup";

type ValidationOptions<T> = {
  rules: { [p in keyof T]?: BaseSchema };
};

export default function <T>(model: Ref<T>, options: ValidationOptions<T>) {
  const errors = ref<{ [p in keyof T]?: string[] }>({});

  const validateRule = (rule: Extract<keyof T, string>) => {
    try {
      options.rules[rule]?.validateSync(model.value[rule]);
      errors.value[rule] = [];
    } catch (err) {
      if (err instanceof ValidationError) {
        errors.value[rule] = err.errors;
      }
    }
  };

  for (const rule in options.rules) {
    watch(
      () => model.value[rule],
      () => validateRule(rule)
    );
  }

  const hasAnyError = computed(() => {
    return Object.values<string[]>(errors.value).some(
      (errors) => errors.length > 0
    );
  });

  const validate = (): boolean => {
    for (const rule in options.rules) {
      validateRule(rule);
    }
    return !hasAnyError.value;
  };

  return {
    validate,
    hasAnyError,
    errors: readonly(errors),
  };
}
