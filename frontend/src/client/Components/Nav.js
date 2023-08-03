import React from "react";
import NavButton from "./NavButton";
import NavIcons from "./navIcons";
import NavSearch from "./navSearch";
import { Link } from "react-router-dom";
import { useState } from "react";
const Nav = () => {
  let [burgerMenu, setBurgerMenu] = useState(true);
  let login = localStorage.getItem("login");
  window.addEventListener("resize", () => {
    let navbarText = document.querySelector(".navbar__text");
    let navbarButton = document.querySelector(".navbar__button");
    // let navbarIcons =document.querySelector(".navbar_icons")
    let nav = document.querySelector(".navbar_");
    let logo = document.querySelector(".navbar__logo");
    let navbarSearch = document.querySelector(".navbar__search");

    try {
      if (window.innerWidth > 1023) {
        nav.style.flexDirection = "row";
        navbarText.style.display = "flex";
        navbarButton.style.display = "flex";
        logo.className = "navbar__logo d-flex justify-content-between";

        // navbarIcons.style.display = "flex"
        navbarSearch.style.display = "block";
      } else {
        nav.style.flexDirection = "column-reverse";
        logo.className = "navbar__logo d-flex justify-content-between order-3";

        navbarText.style.display = "none";
        navbarButton.style.display = "none";
        // navbarIcons.style.display = "none"
        navbarSearch.style.display = "none";
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <nav className="navbar_">
      <div className="navbar__logo d-flex justify-content-between">
        <Link to="/">
          <img src="../Images/logo-no-background.png" alt="logo"></img>
        </Link>

        <div
          className="burgerMenu__container"
          style={{ width: "30px" }}
          onClick={() => {
            setBurgerMenu(!burgerMenu);
            let navbarText = document.querySelector(".navbar__text");
            let navbarButton = document.querySelector(".navbar__button");

            // let navbarIcons =document.querySelector(".navbar_icons")
            let navbarSearch = document.querySelector(".navbar__search");
            if (burgerMenu === true) {
              navbarText.style.display = "flex";
              navbarButton.style.display = "flex";

              // navbarIcons.style.display = "flex"
              navbarSearch.style.display = "block";
            } else {
              navbarText.style.display = "none";
              navbarButton.style.display = "none";
              // navbarIcons.style.display = "none"
              navbarSearch.style.display = "none";
            }
          }}
        >
          {burgerMenu ? (
            <svg
              className="burger__Menu"
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
              display={"none"}
            >
              <style
                dangerouslySetInnerHTML={{ __html: "svg{fill:#49bbbd}" }}
              />
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <svg
              className="burger__Menu"
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 384 512"
              display={"none"}
            >
              <style
                dangerouslySetInnerHTML={{ __html: "svg{fill:#49bbbd}" }}
              />
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          )}
        </div>
      </div>

      <NavSearch />

      {/* <NavButton/> */}
      {login === "true" ? <NavIcons /> : <NavButton />}
    </nav>
  );
};

export default Nav;
