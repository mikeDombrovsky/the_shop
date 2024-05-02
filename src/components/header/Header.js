import React from "react";
import { Navbar, NavbarBrand, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import styles from "./Header.module.css";

const Header  = (props) => {
  const [isMainActive, setIsMainActive] = React.useState(true);
  return (
    <Navbar dark expand className={styles.bg}>
      <NavbarBrand>Blockz pizza bros</NavbarBrand>
      <Collapse navbar>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/the_shop" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/the_shop/cart" activeClassName="active">
              Cart
            </Link>
          </li>
        </ul>
      </Collapse>
    </Navbar>
  );
};

export default withRouter(Header);