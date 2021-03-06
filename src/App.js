import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductLists from "./page/ProductLists";
import ProductDetail from "./page/ProductDetail";
import Cart from "./page/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductLists} />
          <Route path="/product/:productID/detail" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
