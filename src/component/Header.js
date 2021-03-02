function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FA7268",
        color: "white",
        height: "10vh",
      }}
    >
      <div>
        <h1>logo</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minWidth: "100vh",
        }}
      >
        <span>Home</span>
        <span>New Products</span>
        <span>Women</span>
        <span>Men</span>
        <span>Kid</span>
        <span>Accessories</span>
      </div>
      <div>
        <h1>Cart</h1>
      </div>
    </div>
  );
}
export default Header;
