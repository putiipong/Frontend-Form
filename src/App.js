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
          <Route path="/ProductDetail/:ProductID" component={ProductDetail} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
