import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Star from "../icons/star.svg";
import StarFull from "../icons/starFull.svg";

export default function Card() {
  const [products, setProducts] = useState([]);
  let history = useHistory();
  const star = <img src={Star} alt="star" width="12px" height="12px" />;
  const starfull = <img src={StarFull} alt="star" width="12px" height="12px" />;

  useEffect(() => {
    async function getProduct() {
      try {
        let results = await fetch("https://cc-mock-api.herokuapp.com/product");
        let products = await results.json();
        setProducts(products);
      } catch {
        console.log("Fecth error please try again");
      }
    }
    getProduct();
  }, []);

  function viewPost(productID) {
    history.push("/ProductDetail/" + productID);
  }

  function calRating(rating) {
    const array = [star, star, star, star, star];
    return array.fill(starfull, 0, rating);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: "80px",
        }}
      >
        {products.map((product) => {
          return (
            <div
              style={{
                width: "275px",
                height: "308px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                backgroundColor: "white",
                margin: "21px",
                fontSize: "14px",
              }}
              onClick={function handleViewPost() {
                viewPost(product._id);
              }}
            >
              <div
                style={{
                  height: "195px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  padding: "0px",
                }}
              >
                <img
                  src={product.image_url}
                  alt="photoItem"
                  width="275px"
                  height="196px"
                  style={{
                    borderRadius: "20px",
                    position: "absolute",
                    margin: "0",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "8px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <img
                      src={product.brand_info.url}
                      alt="Brandner"
                      width="40px"
                      height="40px"
                      style={{ borderRadius: "10px", marginRight: "10px" }}
                    />
                  </div>
                  <div
                    style={{
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
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#939393",
                      marginBottom: "4px",
                      marginLeft: "65px",
                    }}
                  >
                    Price
                  </p>
                  <div
                    style={{
                      color: "#FF6F61",
                      marginBottom: "16px",
                      marginLeft: "65px",
                    }}
                  >
                    ฿{product.price}
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#939393",
                      marginBottom: "4px",
                      marginRight: "21px",
                    }}
                  >
                    Review ({product.review.number} reviews)
                  </p>
                  <div>{calRating(product.review.rating)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
