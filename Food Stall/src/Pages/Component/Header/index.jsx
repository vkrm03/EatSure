import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/commonClass.css";
import "./style.css";

export default function Header({ isLoggedIn, userName, handleLogout, isAdmin, setAdmin }) {
  const navigate = useNavigate();
  const handleLogoutAndShowToast = () => {
    toast.success("Logged out successfully!", { autoClose: 1000 });
    setTimeout(() => handleLogout(), 1000);
  };

  if (userName === "Admin") {
    setAdmin(true);
  }

  return (
    <div>
      <div className="max-width header">
        <a href="/" className="type-style-none-a logo-a">
          <img
            src="https://product-assets.faasos.io/eatsure/production/es-brandcolor-logo.svg"
            alt="logo"
            className="header-logo"
          />
        </a>

        <div className="header-right">
          <div className="header-location-search">
            <div className="location-wrapper">
              <div className="location-icon">
                <i className="fa-solid fa-location-dot absolute-center"></i>
                <div className="location-text">Chennai</div>
              </div>
              <i className="fa-solid fa-caret-down absolute-center dropdown-icon"></i>
            </div>
          </div>
          <div className="location-separator"></div>
          <div className="header-search">
            <i className="fa-solid fa-magnifying-glass absolute-center"></i>
            <input
              type="text" 
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input absolute-center"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <i className="fa-regular fa-user"></i>
          <div className="user-name">{isLoggedIn ? userName : "Profile"}</div>
          <i className="fa-solid fa-caret-down dropdown-icon dropdown-user-icon"></i>
          <div className="dropdown-menu">
            {isLoggedIn ? (
                <div>
                  {isAdmin ? (
                <div>
                    <div className="dropdown-item type-style-none-a drop-down-item"><Link to="/orders" className="type-style-none-a drop-down-item">
                    Orders
                  </Link></div>
               </div>
            ) : (
              <div className="dropdown-item type-style-none-a drop-down-item"><Link to="/cart" className="type-style-none-a drop-down-item">
                    cart
                  </Link></div>
            )}
                    <div className="dropdown-item type-style-none-a drop-down-item" onClick={handleLogoutAndShowToast} >Logout</div>
               </div>
            ) : (
              <>
                <div className="dropdown-item">
                  <Link to="/login" className="type-style-none-a drop-down-item">
                    Login
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link
                    to="/register"
                    className="type-style-none-a drop-down-item"
                  >
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
