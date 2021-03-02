import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonAddToCart from "../component/ButtonAddToCart";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function ProductDetail() {
  const [Product, setProduct] = useState({});
  //   let history = useHistory();
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

  return (
    <div style={{ backgroundColor: "#DFE6EF" }}>
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
            width: "60%",
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
              width="200px"
              height="200px"
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
            <div>{Product.name}</div>
            <br />
            <div>review</div>
            <br />
            <div>{Product.description}</div>
            <br />
            <div>price</div>
            <div
              style={{
                color: "#FA7268",
                fontSize: "20px",
                fontFamily: "boonBlod",
              }}
            >
              ฿ {Product.price}
            </div>
            <br />
            <div>Quantity</div>
            <ButtonAddToCart />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
