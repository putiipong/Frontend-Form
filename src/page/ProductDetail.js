import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonAddToCart from "../component/ButtonAddToCart";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Star from "../icons/star.svg";
import StarFull from "../icons/starFull.svg";
import { connect } from "react-redux";
import { addToCart } from "../redux/Products/product.action";

function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const history = useHistory();
  const star = <img src={Star} alt="star" width="12px" height="12px" />;
  const starfull = <img src={StarFull} alt="star" width="12px" height="12px" />;
  let params = useParams();
  console.log(params.productID);

  useEffect(() => {
    async function getProductById() {
      let results = await fetch(
        "https://cc-mock-api.herokuapp.com/product/" + params.productID
      );
      let product = await results.json();
      console.log(product);
      setProduct(product);
    }
    getProductById();
  }, []);

  function handleaddToCart() {
    history.push("/Cart");
  }
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

  return (
    <div style={{ backgroundColor: "#E5E5E5", height: "638px" }}>
      <Header />
      <div
        style={{
          width: "100%",
          height: "555px",
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
            height: "448px",
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
              borderRadius: "15px",
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
            <div
              style={{ fontSize: "28px", fontFamily: "Boon", color: "#707070" }}
            >
              {product.name}
            </div>
            <br />
            <div style={{ fontSize: "14px", fontFamily: "Boon-Regular" }}>
              {calRating(product.review?.rating)} ( {product.review?.number}{" "}
              reviews )
            </div>
            <br />
            <div style={{ fontSize: "14px", color: "#939393" }}>
              {product.description}
            </div>
            <br />
            <div style={{ fontSize: "14px", color: "#939393" }}>price</div>
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
                  color: "#484848",
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
            <ButtonAddToCart
              onClick={() =>
                props.addToCart({
                  img_url: product.image_url,
                  name: product.name,
                  quantity: count,
                  price: product.price,
                })
              }
              text={<label>ADD TO CART</label>}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default connect(null, { addToCart })(ProductDetail);
