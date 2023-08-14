import React, { Component, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  FormGroup,
  InputGroup,
  Row,
} from "reactstrap";
import "../../Components/css/Calculator.css";
import chicken from "../../Components/images/products/chicken.jpg";
import { FaSearch } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import { products } from "../../Components/Json/NutritionalItems";
import { valHooks } from "jquery";

const Calculator = () => {
  const [value, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearch = (searchTerm) => {};

  return (
    <Container fluid>
      <Row className="" noGutters>
        <div className="searchArea">
          <Col xs={12} sm={12} md={12} lg={8} xl={6}>
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
                    <Button
                      className="mx-2 py-1 px-1"
                      onClick={() => onSearch(value)}
                    >
                      Search
                    </Button>

                    {products
                      .filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const name = item.name.toLowerCase();
                        return searchTerm && name.startsWith(searchTerm);
                      })
                      .slice(0, 5)
                      .map((product) => (
                        <ul className="ul" style={{ textDecoration: "none" }}>
                          <li className="mt-3 mx-3 listItem">
                            <Link
                              key={product.id}
                              to={`/products/${product.name}`}
                            >
                              <img
                                className="mx-1 me-3"
                                src={product.img}
                                style={{ height: 55 }}
                              ></img>
                              {product.name}
                            </Link>
                          </li>
                          {/* // <h1>{product.category}</h1> */}
                        </ul>
                      ))}

                    <h4> arama kutusuna soup steak chicken yazabilirsniz</h4>
                  </div>
                </div>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="MostSearchProduct">
              {" "}
              <h4 style={{ color: "royalblue" }}>Most Searched Foods</h4>
              {products.map((product) => {
                return (
                  <Card>
                    <div className="Product" key={product.id} style={{}}>
                      <Link to={`/products/${product.name}`}>
                        <div className="itemImg">
                          <img
                            className="mx-1 me-3"
                            src={product.img}
                            style={{ height: 70 }}
                          ></img>
                        </div>
                        <h2>{product.name}</h2>
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};
export default Calculator;
// export const CalculatorAction=async({request})=>{
// const data=await request.formData()

// const submission={
//   input:data.get('text'),

// }
// };
