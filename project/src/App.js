import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import { lazy, Suspense } from "react";

const LoginLazy = lazy(() => import("./pages/Login/Login"));
const MenuLazy = lazy(() => import("./pages/Menu/Menu"));
const CartLazy = lazy(() => import("./pages/Cart/Cart"));
const OrderNewLazy = lazy(() => import("./pages/OrderNew/OrderNew"));
const OrderIdLazy = lazy(() => import("./pages/OrderId/OrderId"));

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LoginLazy />} />
          <Route path="/menu" element={<MenuLazy />} />
          <Route path="/cart" element={<CartLazy />} />
          <Route path="/order/new" element={<OrderNewLazy />} />
          <Route path="/order/:id" element={<OrderIdLazy />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
