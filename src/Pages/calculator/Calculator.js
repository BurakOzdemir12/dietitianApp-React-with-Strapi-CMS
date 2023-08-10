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
import { valHooks } from "jquery";
function Calculator() {
  const [value, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearch=(searchTerm)=>{

  }
  
  return (
    <Container noGutters fluid>
      <Row className="" noGutters>
        <Col xs={12} sm={12} md={12} lg={12} xl={9}>
          <div className="searchArea">
            <h4 className="mx-3">How Much Calories</h4>
            <h5 className="mx-3 mt-4">
              Learn the meals Macro and Micro values you consume.
            </h5>
            {/* <Form method="post" action="/Calculator "> </Form> */}
            <FormGroup className="mt-1 mx-0  ">
              <InputGroup>
                <div className="">
                  <div>
                    <FaSearch className="faS mt-0 mx-2" />
                    <input
                    value={value}
                      name="text"
                      type="text"
                      className="InputArea mt-5"
                      placeholder="Search Meal,Learn Values"
                      onChange={onChange}
                    />
                    <Button className="mx-2 py-1 px-1" onClick={()=>onSearch(value)} >Search</Button>
                    <ul className="ul" style={{ textDecoration: "none" }}>
                      {Values.filter((item) =>{
                      const searchTerm=value.toLowerCase();
                      const name= item.name.toLowerCase();
                      return searchTerm && name.startsWith(searchTerm)
                      }).slice(0,5)
                      .map((values) => (
                        <li key={values.id} className="mt-3 mx-3 listItem">
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
