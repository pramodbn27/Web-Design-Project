import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/npharma.png";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleLogout = () => {
		localStorage.removeItem("token");
    window.location = "/login";}

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    
      <Link to="/product" className="">
        <span className="logo">
          <img src={logo} style={{ height: "100px", width: "100px" }} alt="" />
        </span>

      </Link>


      <ul className="navbar__links">

        <li>
          <Link to="/" className="">
            <span>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to="/allProducts" className="">
            <span>
              Products
            </span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            <span>
              About Us
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="">
            <span>
              Contact Us
            </span>
          </Link>
        </li>
      </ul>


      <ul className="navbar__links">

        <li>
          <Link to="/cart" className="display:flex flex cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
        <button className="display:flex btn btn-dark btn-lg" onClick={handleLogout}>
            Logout
          </button>

        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
