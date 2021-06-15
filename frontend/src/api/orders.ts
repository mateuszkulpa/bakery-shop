import Order from "@/types/order";
import { request } from "./request";

export function placeOrder(order: Order) {
  return request({
    method: "POST",
    url: `/orders/place-order`,
    data: order,
  });
}
