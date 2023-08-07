import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap";

import "../../css/index.css";
import logo from "../../assets/icons/logo.svg";
import { SearchBar } from "./SearchBar";
import SearchResultList from "./SearchResultList";
import { Link, useNavigate } from "react-router-dom";
import ImageUser from "./ImageUser";
import DropdownMenu from "./DropdownMenu";
import { PathIcons } from "../../util/PathIcons";
import { useUserData } from "../../context/userCxt";
import imageUser from "../../assets/icons/user.svg";
import { useCookies } from "react-cookie";
import cartImg from "../../assets/icons/cart.svg";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { userData } = useUserData();
  const navigate = useNavigate();

  const [cookie, setCookie, removeCookie] = useCookies("access_token");
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const SignOut = () => {
    // localStorage.removeItem("login");
    // setCookie("access_token", "");
    removeCookie("access_token");
    localStorage.removeItem("login");
    navigate("/");
    window.location.reload(); // Reload the site
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <header className="header">
        <nav className="my-navbar">
          <Link to="/" className="nav-branding">
            <img src={logo} alt="logo" className="custom-logo-nav" />
          </Link>
          <ul className={`nav-menu ${isActive ? "active" : ""}`}>
            <li className="nav-item custom-item flex-space">
              <form className="search_bar_nav" role="search">
                <div className="">
                  <SearchBar setResults={setResults} value={value} />
                  {results && results.length > 0 && (
                    <SearchResultList
                      results={results}
                      setResult={setResults}
                      // setValue={setValue}
                    />
                  )}
                </div>
              </form>
            </li>

            <li className="nav-item custom-item ">
              <Link to="#" className="nav-link" onClick={closeMenu}>
                Category
              </Link>
            </li>
            <li className="nav-item custom-item ">
              <Link to="/courses" className="nav-link" onClick={closeMenu}>
                Courses
              </Link>
            </li>
            <li className="nav-item custom-item flex-space">
              <Link to="#" className="nav-link" onClick={closeMenu}>
                About us
              </Link>
            </li>

            {userData !== null ? (
              <>
                <Link to={"/cart"}>
                  <img src={cartImg} alt="cartImg" style={{ width: "25px" }} />
                </Link>
                <spam>{userData.username}</spam>
                <div className="dropdown">
                  <button
                    className="btn_dropdown"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <ImageUser
                      image={imageUser}
                      name={"imageUser"}
                      width={40}
                    />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end custom-dropdown-menu pt-3">
                    {/* ***----------------- DropdownMenu  -----------------*** */}
                    <DropdownMenu
                      text={"SignOut"}
                      to={"/"}
                      icon={PathIcons.signOut}
                      onPress={SignOut}
                    />

                    {/* <li onClick={SignOut}>SignOut</li> */}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li className="nav-item custom-item">
                  <Link to="/login" className="nav-link" onClick={closeMenu}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item custom-item btn-register">
                  <Link
                    to="/register"
                    className="nav-link "
                    onClick={closeMenu}
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <div style={{ width: "100%", height: "80px" }}></div>
    </>
  );
};

export default Navbar;
