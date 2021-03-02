import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Card() {
  const [products, setProducts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    async function getPost() {
      let results = await fetch("https://cc-mock-api.herokuapp.com/product");
      let products = await results.json();
      setProducts(products);
      console.log(products);
    }
    getPost();
  }, []);

  function ViewPost(ProductID) {
    history.push("/ProductDetail/" + ProductID);
  }

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {products.map((product) => {
        return (
          <div
            style={{
              width: "210px",
              borderRadius: "40px",
              border: "1px solid white",
              backgroundColor: "white",
              padding: "10px",
            }}
            onClick={function handleViewPost() {
              ViewPost(product._id);
            }}
          >
            <div>
              <img src="{product.bimage_url}" alt="Image" />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div>
                  <img src="{product.brand_info.url}" alt="Brandner" />
                </div>
                <div>{product.name}</div>
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
