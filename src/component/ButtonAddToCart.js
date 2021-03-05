import { ReactComponent as AddCartLogo } from "../icons/add-cart.svg";

export default function ButtonAddToCart(prop) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6F61",
        color: "white",
        width: "206px",
        height: "48px",
        borderRadius: "10px",
        fontSize: "14px",
      }}
      onClick={prop.onClick}
    >
      <AddCartLogo /> {prop.text}
    </div>
  );
}
