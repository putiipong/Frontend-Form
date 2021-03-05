import Header from "../component/Header";
import Card from "../component/Card";
import Footer from "../component/Footer";
import { connect } from "react-redux";

function ProductLists(products) {
  console.log(products, "mmmmmmmmmmmmmmmmm");
  return (
    <div style={{ backgroundColor: "#DFE6EF" }}>
      <Header />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
          minHeight: "85vh",
        }}
      >
        <Card />
      </div>
      <Footer />
    </div>
  );
}
export default ProductLists;
