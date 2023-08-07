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
  Container,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import "../css/style.css";
import brand from "../images/Brand.PNG";
import { Link } from "react-router-dom";
//@import url('https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&family=Poppins:wght@300;400;500&family=Roboto+Slab:wght@700&display=swap');

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div class="navlinks" >
      <Container fluid   >
        <Row noGutters>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} >
      <Navbar expand="xl" className="navbar" {...args}>
          <NavbarBrand className="brand"  href="/home"><img height={110 }width={220}  src={brand}></img></NavbarBrand>
        <NavbarToggler className="mx-5" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav mt-4 mx-auto" navbar >
            <NavItem className="mx-3 py-2">
              <Link className="navlink" href="#about">
                ABOUT
              </Link>
            </NavItem>
            <NavItem className="mx-3 py-2">
              <Link className="navlink" href="#">
                WORK WITH US
              </Link>
            </NavItem>
            <NavItem className="mx-3 py-2">
              <Link className="navlink" href="#">
                EBOOK
              </Link>
            </NavItem>
            <NavItem className="mx-3 py-2">
              <Link className="navlink" to={"/cart"} href="/cart">
                RECIPES
              </Link>
            </NavItem>
            <NavItem className="mx-3 py-2">
              <Link className="navlink" href="#">
                BLOGS
              </Link>
            </NavItem>
            <NavItem className="mx-3 py-2">
              <Link className="navlink" href="#">
                CONTACT
              </Link>
            </NavItem>
            <NavItem className="mx-3 py-2">
              <Link className="navlink" href="#">
                MEDIA
              </Link>
            </NavItem>
            <NavItem className="navIcon mt-2">
              <FaFacebook className=" navicons  mx-2" />
              <FaInstagram className="navicons mx-2" />
              <FaPinterest className=" navicons mx-2" />
            </NavItem> 
          </Nav>
        </Collapse>
      </Navbar>
      </Col>
        </Row>
      </Container>
      </div>

      

  );
}

export default Navi;
