import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrSearch } from "react-icons/gr";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropDown from "./ProfileDropDown";
import NavMenu from "../NavMenu/NavMenu";

function Header() {
  const bag = useSelector((store) => store.bag);
  // console.log(bag);
  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid ">
          <div className="logo">
            <Link to="/" href="#">
              <img src="images/logo.jpg" alt="" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <Link
                  to="/men"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Men
                </Link>
                <NavMenu className="" />
              </li>
              <li className="nav-item">
                <Link
                  to="/men"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Women
                </Link>
                <NavMenu className="" />
              </li>
              <li className="nav-item">
                <Link
                  to="/men"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Kids
                </Link>
                <NavMenu className="" />
              </li>
              <li className="nav-item">
                <Link
                  to="/men"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Home& living
                </Link>
                <NavMenu className="" />
              </li>
              <li className="nav-item">
                <Link
                  to="/men"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  beauty
                </Link>
                <NavMenu className="" />
              </li>
              <li className="nav-item">
                <Link
                  to="/men"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Studio
                </Link>
                <NavMenu className="" />
              </li>
              {/* </div> */}
            </ul>
            <div className="search_bar">
              <GrSearch className="search_icon" />
              <input
                className="search_input"
                placeholder="Search for products, brands and more"
              />
            </div>
            <div className="action_bar ms-3">
              <div className="action_container user-icon position-relative">
                <CiUser className="action_icon " />

                <span className="action_name user-icon">Profile</span>

                <ProfileDropDown className="" />
              </div>

              <div className="action_container">
                <CiHeart className="action_icon" />

                <span className="action_name">Wishlist</span>
              </div>

              <Link
                to="/bag"
                className="action_container"
                href="/pages/bag.html"
              >
                <HiOutlineShoppingBag className="action_icon" />

                <span className="action_name">{bag.length}</span>
                <span className="bag-item-count"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
