import React, { Component } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Visitors",
    path: "Visitors",
  },
];

const NavItem = ({ navItem }) => (
  <Link to={navItem.path}>
    <div className="flex items-center">
      <span className="">{navItem.label}</span>
    </div>
  </Link>
);

const NavItemContainer = ({ children }) => <div>{children}</div>;

class Sidebar extends Component {
  render() {
    return (
      <section>
        <div>
          {navItems.map((navItem, i) => (
            <NavItemContainer key={i}>
              <NavItem navItem={navItem} />
            </NavItemContainer>
          ))}
        </div>
      </section>
    );
  }
}

export default Sidebar;
