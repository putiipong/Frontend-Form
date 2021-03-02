import Header from "../component/Header";
import Footer from "../component/Footer";
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
            padding: "50px",
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
              margin: "50px",
              width: "60%",
              overflow: "hidden",
            }}
          >
            <div>{Product.name}</div>
            <div>review</div>
            <div>{Product.description}</div>
            <div>price</div>
            <div>฿{Product.price}</div>
            <div>Quantity</div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
