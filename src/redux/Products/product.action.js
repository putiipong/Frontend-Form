import { ADDTOCART } from "./product.type";

export const addToCart = (products) => {
  return {
    type: ADDTOCART,
    payload: {
      img: products.img_url,
      name: products.name,
      quantity: products.quantity,
      price: products.price,
    },
  };
};
