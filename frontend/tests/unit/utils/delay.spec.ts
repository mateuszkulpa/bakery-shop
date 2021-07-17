import delay from "@/utils/delay";
import { flushPromises } from "@vue/test-utils";

beforeEach(() => {
  jest.useFakeTimers();
});

describe("delay.ts", () => {
  it("resolves promise after delay", async () => {
    const mockFn = jest.fn();
    const DELAY = 20;

    delay(DELAY).then(() => mockFn());
    jest.advanceTimersByTime(DELAY);
    await flushPromises();

    expect(mockFn).toBeCalled();
  });
});
