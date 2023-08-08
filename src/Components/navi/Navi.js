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
import "../css/navi.css";
import brand from "../images/Brand.PNG";
import { Link } from "react-router-dom";
//@import url('https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&family=Poppins:wght@300;400;500&family=Roboto+Slab:wght@700&display=swap');

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const body = document.body;
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    if (currentScroll === lastScroll) {
      body.classList.add("scrolled-up");
    } if(currentScroll!==lastScroll) {
      body.classList.remove("scrolled-up");
    }
    lastScroll = currentScroll;
  });

  return (
    <div class="navlinks fluid noGutters">
      <Container fluid>
        <Row noGutters>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Navbar className="navv" fixed="top" expand="xl" {...args}>
              <NavbarBrand className="brand" href="/home">
                <img height={110} width={220} src={brand}></img>
              </NavbarBrand>
              <NavbarToggler className="mx-5" onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="nav mt-4 mx-auto" navbar>
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
                    <Link className="navlink" to={"cart"} href="/cart">
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
