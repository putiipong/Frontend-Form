import { combineReducers } from "redux";
import productReducer from "./Products/product.reducer";

const rootReducer = combineReducers({ product: productReducer });

export default rootReducer;
