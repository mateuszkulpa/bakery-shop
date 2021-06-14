import CartItem from "./cartItem";
import DeliveryType from "./deliveryType";

type Order = {
  clientName: string;
  clientPhoneNumber: string;
  clientAddress: string;
  items: CartItem[];
  deliveryType: DeliveryType;
};

export default Order;
