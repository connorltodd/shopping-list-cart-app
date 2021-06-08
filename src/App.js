import "./App.css";
import CartList from "./components/CartList";
import ProductList from "./components/ProductList";
import CartContextProvider from "./contexts/CartContext";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Link to="/cart">Cart</Link>
          <Link to="/">HomePage</Link>

          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={CartList} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
