import { shallowMount } from "@vue/test-utils";
import ProductImage from "@/components/atoms/ProductImage.vue";
import Image from "@/types/image";

describe("ProductImage.vue", () => {
  it("renders product image with src and alt attrs", async () => {
    const src = "/image-src.png";
    const alt = "Alternative text content";

    const image: Partial<Image> = {
      url: src,
      alternativeText: alt,
    };

    const wrapper = shallowMount(ProductImage, {
      props: { image },
    });

    expect(wrapper.attributes("alt")).toMatch(alt);
    expect(wrapper.attributes("src")).toMatch(src);
  });
});
