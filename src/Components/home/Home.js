import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

import "../css/home.css";
import diyetisyen1 from "../images/diyetisyen1.jpg";
import dietetician from "../images/About-img-home.jpg";
import { Button, Carousel, Col, Container, Row } from "reactstrap";
export default class Home extends Component {
  render() {
    return (
      <div><Container fluid>
        <Row >
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="  mt-1 ">
            <img className="startimg" src={diyetisyen1}></img>
          </Col>
          {/* <div className=""></div> */}
         
          <Col  id="#about" className=" gx-5  about" xs={12} sm={12} md={6} lg={6} xl={6}>
            <h6 className="mt-5 mx-5 ">ABOUT</h6>
            <h3 className="hello  mx-5 mt-5 py-5 px-1">Hello There I'm X</h3>
            <p className="abouttext mx-4 mt-5">
              Aliquet porttitor lacus luc Ac turpis egestas maecenas pharetra
              convallis posuere morbi leo urna. Lacus vestibulum sed arcu non
              odio euismod. <br /> <br /> At erat pellentesque adipiscing
              commodo. Massa id neque aliquam vestibulum. Sed nisi lacus sed
              viverra tellus in hac. In pellentesque massa placerat duis
              ultricies lacus sed turpis.
            </p>{" "}
            <Button className="  Readmore mt-5 my-5  mx-5">
              Read More
            </Button>
          </Col>
          
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <img className="img2" src={dietetician}></img>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
