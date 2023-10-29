import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} style={{ height: "100px", width: "100px" }} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Offer</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
