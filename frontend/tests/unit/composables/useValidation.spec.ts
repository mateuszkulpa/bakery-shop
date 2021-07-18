import useValidation from "@/composables/useValidation";
import { flushPromises } from "@vue/test-utils";
import { ref, unref } from "vue";
import * as yup from "yup";

describe("useValidation.ts", () => {
  it("returns a validation errors when model is incorrect", () => {
    const model = ref({
      firstName: "",
    });

    const { errors, validate, hasAnyError } = useValidation(model, {
      rules: {
        firstName: yup.string().required(),
      },
    });

    expect(unref(hasAnyError)).toBe(false);
    expect(unref(errors).firstName).toBe(undefined);

    validate();

    expect(unref(hasAnyError)).toBe(true);
    expect(unref(errors).firstName).toHaveLength(1);
  });

  it("validates property on changed", async () => {
    const model = ref({ count: 10 });
    const { errors } = useValidation(model, {
      rules: {
        count: yup.number().max(10),
      },
    });

    expect(Object.keys(unref(errors))).toHaveLength(0);

    model.value.count++;
    await flushPromises();

    expect(Object.keys(unref(errors))).toHaveLength(1);
  });

  it("removes error after validated property fixed", async () => {
    const model = ref({ count: 11 });
    const { errors, validate } = useValidation(model, {
      rules: {
        count: yup.number().max(10),
      },
    });
    validate();

    expect(unref(errors).count).toHaveLength(1);

    model.value.count--;
    await flushPromises();

    expect(unref(errors).count).toHaveLength(0);
  });

  it("skips add error when rule throws not ValidationError", async () => {
    const model = ref({ count: 11 });
    const { errors, validate } = useValidation(model, {
      rules: {
        // @ts-ignore
        count: {
          validateSync() {
            throw new Error("another error");
          },
        },
      },
    });

    validate();
    expect(unref(errors).count).toBe(undefined);
  });
});
