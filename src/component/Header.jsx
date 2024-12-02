import "../component/mainComponent.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <h1>Header</h1>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/powerfull">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <button>Buy Now</button>
        </div>
      </header>
    </>
  );
};

export default Header;
