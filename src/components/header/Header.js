import React from "react";
import { Navbar, NavbarBrand, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import styles from "./Header.module.css";

const Header  = (props) => {
  return (
    <Navbar dark expand className={styles.bg}>
      <NavbarBrand>Blockz pizza bros</NavbarBrand>
      <Collapse navbar>
        <ul className="navbar-nav ml-auto">
          <li
            className={
              props.location.pathname.endswith("/the_shop")  ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/the_shop">
              Home
            </Link>
          </li>
          <li
            className={
              props.location.pathname.endswith("/the_shop/cart")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/the_shop/cart">
              Cart
            </Link>
          </li>
        </ul>
      </Collapse>
    </Navbar>
  );
};

export default withRouter(Header);