import { ReactComponent as COBLogo } from "../logo.svg";
import { ReactComponent as CartLogo } from "../icons/cart.svg";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FA7268",
        color: "white",
        height: "10vh",
      }}
    >
      <div>
        <COBLogo />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minWidth: "100vh",
        }}
      >
        <span>Home</span>
        <span>New Products</span>
        <span>Women</span>
        <span>Men</span>
        <span>Kid</span>
        <span>Accessories</span>
      </div>
      <div>
        <CartLogo />
        <span>Cart</span>
      </div>
    </div>
  );
}
export default Header;
