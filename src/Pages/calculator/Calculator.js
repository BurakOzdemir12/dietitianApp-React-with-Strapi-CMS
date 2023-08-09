import React, { Component, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  FormGroup,
  InputGroup,
  Row,
} from "reactstrap";
import "../../Components/css/Calculator.css";
import { FaSearch } from "react-icons/fa";
import { Form } from "react-router-dom";
import { Values } from "../../Components/Json/NutritionalValues";
function Calculator() {
  const [query, setQuery] = useState("");
  // console.log(Values.filter(values=>values.name.toLowerCase().includes("t")));
  return (
    <Container noGutters fluid>
      <Row className="" noGutters>
        <Col xs={12} sm={12} md={9} lg={9} xl={9}>
          <div className="searchArea">
            <h4>How Much Calories</h4>
            <h5 className="mt-5">
              Learn the meals Macro and Micro values you consume.
            </h5>

            {/* <Form method="post" action="/Calculator "> </Form> */}
            <FormGroup className="mt-1 mx-0  ">
              <InputGroup>
                <div className="">
                  <div>
                    <FaSearch className="faS mt-0 mx-2" />
                    <input
                      name="text"
                      type="text"
                      className="InputArea mt-5"
                      placeholder="Search Meal,Learn Values"
                      onChange={(e) => setQuery(e.target.value)}
                    ></input>
                    <ul className="ul" style={{ textDecoration: "none" }}>
                      {Values.filter((values) =>
                        values.name.toLowerCase().includes(query)
                      ).map((values) => (
                        <li  key={values.id} className="mt-3 mx-3 listItem">
                          <a href="#">{values.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </InputGroup>
            </FormGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Calculator;
// export const CalculatorAction=async({request})=>{
// const data=await request.formData()

// const submission={
//   input:data.get('text'),

// }
// };
