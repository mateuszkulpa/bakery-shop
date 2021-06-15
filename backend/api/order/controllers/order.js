"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  placeOrder: async (ctx) => {
    const orderBody = ctx.request.body;

    const order = await strapi.query("order").create({
      clientName: orderBody.clientName,
      clientPhoneNumber: orderBody.clientPhoneNumber,
      clientAddress: orderBody.clientAddress,
      deliveryType: orderBody.deliveryType,
      items: orderBody.items.map((item) => ({
        name: item.product.name,
        pricePerKg: item.product.pricePerKg,
        kgs: item.weight,
        total: item.weight * item.product.pricePerKg,
        cake: item.product.id
      })),
      totalPrice: orderBody.items.reduce((acc, item) => acc + item.weight * item.product.pricePerKg, 0),
      pickupLocation: orderBody.pickupLocation,
    });

    console.log(order);

    return {
      test: 123,
    };
  },
};
