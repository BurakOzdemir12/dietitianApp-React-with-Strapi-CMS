import React, { Component, useState } from "react";
import { Recipes } from "../../Components/Json/Recipes"
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";

const  FoodDetail= ()=> {
console.log(useParams());
  const {foodId}= useParams();
  const food=Recipes.find((food)=>food.id===foodId)
  // const{name}=food
  return (
    <div> <h1>{food.name}</h1>
    
    <h1>{foodId}</h1>
      <Container fluid>
        <Row noGutters>
          <Col xs={12} sm={12} md={12} lg={12} xl={9}>
            <div className=" ">
            

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FoodDetail;
