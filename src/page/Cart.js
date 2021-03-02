import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Cart() {
  return (
    <div
      style={{
        backgroundColor: "#DFE6EF",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div
        style={{
          backgroundColor: "#DFE6EF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <div
          style={{
            borderRadius: "40px",
            border: "1px solid white",
            width: "80%",
            backgroundColor: "white",
          }}
        >
          <div>
            <h1>Cart</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid",
            }}
          >
            <div style={{ width: "60%" }}>PRODUCT NAME</div>
            <div
              style={{
                display: "flex",
                width: "40%",
                justifyContent: "space-around",
              }}
            >
              <div>PRICE</div>
              <div>QUANTITY</div>
              <div>TOTAL</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid",
              height: "90px",
            }}
          >
            <div style={{ width: "60%" }}>PRODUCT NAME</div>
            <div
              style={{
                display: "flex",
                width: "40%",
                justifyContent: "space-around",
              }}
            >
              <div>PRICE</div>
              <div>QUANTITY</div>
              <div>TOTAL</div>
            </div>
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
              <p>Subtotal:</p>
              <button>PROCEED TO CHECH OUT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
