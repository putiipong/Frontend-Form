import { ReactComponent as COBLogo } from "../logo.svg";
import { ReactComponent as CartLogo } from "../icons/cart.svg";
import { useState } from "react";

export default function Header() {
  let [totalItem, settotalItem] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FF6F61",
        color: "white",
        height: "10vh",
        fontSize: "16px",
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
        <CartLogo style={{ position: "absolute", right: "9.5%" }} />
        <div
          style={{
            height: "16px",
            width: "16px",
            top: "25px",
            borderRadius: "100px",
            position: "absolute",
            right: "9%",
            backgroundColor: "#1A586A",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
          }}
        >
          <h6
            style={{
              margin: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {totalItem}
          </h6>
        </div>
        <span style={{ fontSize: "12px" }}>Cart</span>
      </div>
    </div>
  );
}
