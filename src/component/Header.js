import { ReactComponent as COBLogo } from "../logo.svg";
import { ReactComponent as CartLogo } from "../icons/cart.svg";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
function Header(props) {
  let history = useHistory();

  function handleonClick() {
    history.push("/Cart");
  }

  function clickToHome() {
    history.push("/");
  }

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
        <COBLogo onClick={clickToHome} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minWidth: "100vh",
        }}
      >
        <label onClick={clickToHome}>Home</label>
        <label>New Products</label>
        <label>Women</label>
        <label>Men</label>
        <label>Kid</label>
        <label>Accessories</label>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <CartLogo style={{ position: "absolute", right: "9.5%" }} />

          <div
            style={{
              height: "16px",
              width: "16px",
              top: "22px",
              borderRadius: "100px",
              position: "absolute",
              right: "9.3%",
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
                fontSize: "12px",
                fontStyle: "normal",
              }}
            >
              {props.products.reduce(function (accumulator, product) {
                return accumulator + product.quantity;
              }, 0)}
            </h6>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "24px",
            height: "24px",
          }}
        >
          <label
            onClick={handleonClick}
            style={{
              fontSize: "12px",
            }}
          >
            Cart
          </label>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.product.product,
  };
};

export default connect(mapStateToProps)(Header);
