import Header from "../component/Header";
import Card from "../component/Card";
import Footer from "../component/Footer";

function ProductLists(products) {
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
