import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useSelector } from "react-redux";
import OrderNew from "./pages/OrderNew/OrderNew";
import OrderId from "./pages/OrderId/OrderId";

function App() {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((acc, item) => acc + item.qty, 0);
  return (
    <div className="App">
      <nav>
        <NavLink to="/">
          <span className="header"> Login </span>
        </NavLink>
        <NavLink to="/menu">
          <span className="header"> Menu </span>
        </NavLink>
        <NavLink to="/cart">
          <span className="header"> Cart({totalQuantity}) </span>
        </NavLink>
        <NavLink to="/order/new">
          <span className="header"> Order </span>
        </NavLink>
      
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/new" element={<OrderNew />} />
        <Route path="/order/:id" element={<OrderId />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
