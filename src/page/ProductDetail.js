import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonAddToCart from "../component/ButtonAddToCart";
import { useState, useEffect } from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";

export default function ProductDetail() {
  const [Product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  //   let [totalItem, settotalItem] = useHeader();
  let params = useParams();
  console.log(params.ProductID);

  useEffect(() => {
    async function GetProductById() {
      let results = await fetch(
        "https://cc-mock-api.herokuapp.com/product/" + params.ProductID
      );
      let Product = await results.json();
      console.log(Product);
      setProduct(Product);
    }
    GetProductById();
  }, []);

  function handleSubtractItem() {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }

  function handleAddItem() {
    setCount(count + 1);
  }

  function handleAddToCart() {
    // settotalItem(totalItem + count);
  }

  return (
    <div style={{ backgroundColor: "#E5E5E5", height: "638px" }}>
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "10px",
        }}
      >
        <div
          style={{
            margin: "50px",
            width: "1166px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid white",
            borderRadius: "10px",
            backgroundColor: "white",
            padding: "22px",
          }}
        >
          <div
            style={{
              width: "40%",
            }}
          >
            <img
              src={Product.image_url}
              alt="Image"
              width="460px"
              height="400px"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              margin: "30px",
              width: "60%",
              overflow: "hidden",
            }}
          >
            <div style={{ fontSize: "28px" }}>{Product.name}</div>
            <br />
            <div style={{ fontSize: "14px" }}>review</div>
            <br />
            <div style={{ fontSize: "14px" }}>{Product.description}</div>
            <br />
            <div style={{ fontSize: "14px" }}>price</div>
            <div
              style={{
                color: "#FA7268",
                fontSize: "28px",
                fontFamily: "boonBlod",
              }}
            >
              ฿ {Product.price}
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <p>Quantity:</p>
              </div>
              <div>
                <div
                  style={{
                    marginLeft: "35px",
                    borderRadius: "10px",
                    width: "103px",
                    height: "38px",
                    border: "1px solid",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                >
                  <button
                    onClick={handleSubtractItem}
                    style={{
                      width: "30px",
                      height: "36px",
                      border: "1px solid white",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    -
                  </button>
                  <h3>{count}</h3>
                  <button
                    onClick={handleAddItem}
                    style={{
                      width: "30px",
                      height: "36px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid white",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <ButtonAddToCart onClick={handleAddToCart} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
