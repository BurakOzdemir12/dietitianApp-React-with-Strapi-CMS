import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import "../css/style.css";

import { Link } from "react-router-dom";
//@import url('https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&family=Poppins:wght@300;400;500&family=Roboto+Slab:wght@700&display=swap');

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" {...args}>
        <NavbarBrand href="/home">Dietetics</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mt-4 mx-auto" navbar>
            <NavItem className="mx-3 py-2">
              <Link className="navlink" href="#about">ABOUT</Link>
            </NavItem> 
            <NavItem  className="mx-3 py-2">
              <Link className="navlink" href="#">
                WORK WITH US
              </Link>
            </NavItem>
            <NavItem  className="mx-3 py-2">
              <Link className="navlink" href="#">
                EBOOK
              </Link>
            </NavItem>
            <NavItem  className="mx-3 py-2">
              <Link className="navlink" href="#">
                RECIPES
              </Link>
            </NavItem>
            <NavItem  className="mx-3 py-2">
              <Link className="navlink" href="#">
                BLOGS
              </Link>
            </NavItem>
            <NavItem  className="mx-3 py-2">
              <Link className="navlink" href="#">
                CONTACT
              </Link>
            </NavItem>
            <NavItem  className="mx-3 py-2">
              <Link className="navlink" href="#">
                MEDIA
              </Link>
            </NavItem>

            <NavItem className="mt-4">
              <FaFacebook className=" navicons  mx-2" />
              <FaInstagram className="navicons mx-2" />
              <FaPinterest className=" navicons mx-2" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
