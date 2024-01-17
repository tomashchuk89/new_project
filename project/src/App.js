import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">
          <span className="header"> Login </span>
        </NavLink>
        <NavLink to="/menu">
          <span className="header"> Menu </span>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
