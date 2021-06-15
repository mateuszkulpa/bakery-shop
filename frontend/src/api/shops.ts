import Shop from "@/types/shop";
import { request } from "./request";

export function fetchShops(): Promise<Shop[]> {
  return request({
    method: "GET",
    url: `/shops`,
  });
}
