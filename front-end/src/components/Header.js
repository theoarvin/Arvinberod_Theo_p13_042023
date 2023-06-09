import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import argentBankLogo from "../assets/img/argentBankLogo.png";

function Header({ userProfile }) {
  const user = useSelector((state) => state?.user?.userData);

  const handleLogout = () => {
    window.location = "/";
  };

  return (
    <>
      {userProfile ? (
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src={argentBankLogo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {user?.firstName}
            </Link>
            <Link className="main-nav-item" onClick={() => handleLogout()}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src={argentBankLogo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
