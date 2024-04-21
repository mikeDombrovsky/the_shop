import React from "react";
import { Navbar, NavbarBrand, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import styles from "./Header.module.css";

const Header  = (props) => {
  return (
    <Navbar dark expand className={styles.bg}>
      <NavbarBrand>The Shop</NavbarBrand>
      <Collapse navbar>
        <ul className="navbar-nav m-auto">
          <li
            className={
              props.location.pathname === "/" ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={
              props.location.pathname === "/cart"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </Collapse>
    </Navbar>
  );
};

export default withRouter(Header);