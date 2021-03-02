import { ReactComponent as AddCartLogo } from "../icons/add-cart.svg";

export default function ButtonAddToCart() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FA7268",
        color: "white",
        width: "40%",
        height: "35px",
        borderRadius: "8px",
      }}
    >
      <AddCartLogo /> <span>ADD TO CART</span>
    </div>
  );
}
