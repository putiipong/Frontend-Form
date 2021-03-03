import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonAddToCart from "../component/ButtonAddToCart";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Star from "../icons/star.svg";
import StarFull from "../icons/starFull.svg";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const star = <img src={Star} alt="star" width="12px" height="12px" />;
  const starfull = <img src={StarFull} alt="star" width="12px" height="12px" />;
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

  function calRating(rating) {
    const array = [star, star, star, star, star];
    return array.fill(starfull, 0, rating);
  }

  function handleAddToCart() {}

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
              src={product.image_url}
              alt="photoItem"
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
            <div style={{ fontSize: "28px" }}>{product.name}</div>
            <br />
            <div style={{ fontSize: "14px" }}>
              {calRating(product.review?.rating)} ( {product.review?.number}{" "}
              reviews )
            </div>
            <br />
            <div style={{ fontSize: "14px" }}>{product.description}</div>
            <br />
            <div style={{ fontSize: "14px" }}>price</div>
            <div
              style={{
                color: "#FA7268",
                fontSize: "28px",
                fontFamily: "boonBlod",
              }}
            >
              ฿ {product.price}
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
