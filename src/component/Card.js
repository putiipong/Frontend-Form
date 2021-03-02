import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Card() {
  const [products, setProducts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    async function getProduct() {
      let results = await fetch("https://cc-mock-api.herokuapp.com/product");
      let products = await results.json();
      setProducts(products);
      console.log(products);
    }
    getProduct();
  }, []);

  function viewPost(productID) {
    history.push("/ProductDetail/" + productID);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => {
        return (
          <div
            style={{
              width: "210px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
              border: "1px solid white",
              backgroundColor: "white",
              // padding: "10px",
              margin: "21px",
              fontSize: "10px",
            }}
            onClick={function handleViewPost() {
              viewPost(product._id);
            }}
          >
            <div
              style={{
                width: "100%",
                height: "60%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // overflow: "hidden",
              }}
            >
              <img
                src={product.image_url}
                alt="Image"
                width="210px"
                height="100%"
                style={{
                  borderRadius: "10px",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div>
                  <img
                    src={product.brand_info.url}
                    alt="Brandner"
                    width="50px"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div style={{ overflow: "hidden" }}>{product.name}</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <p>Price</p>
                <div>฿{product.price}</div>
              </div>
              <div>
                <p>review</p>
                <div></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
