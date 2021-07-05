import useRequest from "@/composables/useRequest";
import delay from "@/utils/delay";
import { flushPromises } from "@vue/test-utils";
import { unref } from "vue";

describe("useRequest", () => {
  it("calls a fetch function on init", async () => {
    const requestFn = jest.fn(
      () => new Promise<void>((res) => res())
    );

    useRequest(requestFn);

    expect(requestFn).toBeCalled();
  });

  it("returns pending flag until request finished", async () => {
    let promiseResolveFn: Function | undefined;
    const requestMockFn = () =>
      new Promise((resolve) => (promiseResolveFn = resolve));

    const { pending } = useRequest(requestMockFn);
    expect(unref(pending)).toBe(true);

    promiseResolveFn?.();
    await flushPromises();

    expect(unref(pending)).toBe(false);
  });

  it("returns error flag after promise rejected", async () => {
    let promiseRejectFn: Function | undefined;
    const requestMockFn = () =>
      new Promise((_, reject) => (promiseRejectFn = reject));

    const { error } = useRequest(requestMockFn);
    expect(unref(error)).toBe(false);

    promiseRejectFn?.();
    await flushPromises();

    expect(unref(error)).toBe(true);
  });
});
