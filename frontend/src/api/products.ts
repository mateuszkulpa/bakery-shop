import Product from "@/types/product";
import { request } from "./request";

export function fetchProducts(): Promise<Product[]> {
  return request({
    method: "GET",
    url: `/cakes`,
  });
}

export function fetchFeaturedProducts(): Promise<Product[]> {
  return request({
    method: "GET",
    url: `/cakes`,
    params: { featured: true },
  });
}

export function fetchProduct(id: number): Promise<Product> {
  return request({
    method: "GET",
    url: `/cakes/${id}`,
  });
}
