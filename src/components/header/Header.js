import React from "react";
import { Navbar, NavbarBrand, Collapse } from "reactstrap";
import { Link, withRouter, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header  = () => {
  return (
    <Navbar dark expand className={styles.bg}>
      <NavbarBrand>Blockz pizza bros</NavbarBrand>
      <Collapse navbar>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/the_shop">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/the_shop/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </Collapse>
    </Navbar>
  );
};

export default withRouter(Header);