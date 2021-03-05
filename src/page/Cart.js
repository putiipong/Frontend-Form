import Header from "../component/Header";
import Footer from "../component/Footer";
import { connect } from "react-redux";

function Cart(props) {
  console.log(props, "porppppppppppppppppppppp");
  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div
        style={{
          backgroundColor: "#E5E5E5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "1167px",
            height: "417px",
            borderRadius: "20px",
            margin: "69px",
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "Boon",
              fontStyle: "Medium",
              fontSize: "28px",
            }}
          >
            <h3 style={{ marginBottom: "0px", marginTop: "0px" }}>Cart</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #DEDEDE",
              fontSize: "18px",
              fontFamily: "Boon",
            }}
          >
            <h5
              style={{ width: "60%", marginTop: "24px", marginBottom: "6px" }}
            >
              PRODUCT NAME
            </h5>
            <div
              style={{
                display: "flex",
                width: "40%",
                justifyContent: "space-around",
                fontFamily: "Boon",
                fontSize: "18px",
              }}
            >
              <h5 style={{ marginTop: "24px", marginBottom: "6px" }}>PRICE</h5>
              <h5 style={{ marginTop: "24px", marginBottom: "6px" }}>
                QUANTITY
              </h5>
              <h5 style={{ marginTop: "24px", marginBottom: "6px" }}>TOTAL</h5>
            </div>
          </div>
          <div style={{ overflow: "auto", height: "161px" }}>
            {props.products.map((product) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #DEDEDE",
                    height: "80px",
                  }}
                >
                  <div style={{ width: "60%", display: "flex" }}>
                    <img
                      src={product.img}
                      alt="img_product"
                      width="40px"
                      height="40px"
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        overflow: "hidden",
                        color: "#484848",
                        fontFamily: "Boon",
                        fontSize: "14px",
                        lineHeight: "18px",
                        fontStyle: "normal",
                        fontWeight: "600",
                      }}
                    >
                      {product.name}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "40%",
                      justifyContent: "space-around",
                      color: "#A0A0A0",
                      fontSize: "14px",
                      fontFamily: "Boon",
                    }}
                  >
                    <div>฿{product.price}</div>
                    <div>{product.quantity}</div>
                    <div>฿{product.price * product.quantity}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", width: "70%" }}></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "Boon",
                }}
              >
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                    fontStyle: "normal",
                    marginBottom: "20px",
                    marginTop: "35px",
                  }}
                >
                  Subtotal: (
                  {props.products.reduce(function (accumulator, product) {
                    return accumulator + product.quantity;
                  }, 0)}{" "}
                  Product):
                </h4>
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FA7268",
                    fontSize: "28px",
                    fontStyle: "normal",
                    marginBottom: "15px",
                    marginTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  ฿{" "}
                  {props.products.reduce(function (accumulator, product) {
                    return accumulator + product.quantity * product.price;
                  }, 0)}
                </h3>
              </div>
              <label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF6F61",
                  color: "white",
                  width: "331px",
                  height: "48px",
                  borderRadius: "10px",
                  fontSize: "14px",
                }}
              >
                PROCEED TO CHECK OUT
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state, ",,,,,,,,state");
  return {
    products: state.product.product,
  };
};

export default connect(mapStateToProps)(Cart);
