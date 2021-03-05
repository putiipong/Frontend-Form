import { ADDTOCART } from "./product.type";

const INITIAL_STATE1 = {
  product: [],
};

function productReducer(state = INITIAL_STATE1, action) {
  switch (action.type) {
    case ADDTOCART:
      console.log("item");
      return {
        ...state,
        product: [
          ...state.product,
          {
            img: action.payload.img,
            name: action.payload.name,
            quantity: action.payload.quantity,
            price: action.payload.price,
          },
        ],
      };
    default:
      return state;
  }
}
export default productReducer;
