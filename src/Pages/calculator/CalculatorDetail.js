import React, { useEffect, useState } from "react";
import { products } from "../../Components/Json/NutritionalItems";
import { useParams } from "react-router-dom";
import { Col, Dropdown, DropdownItem, Row, Table } from "reactstrap";
import "../../Components/css/calculatorDetail.css";

import {
  Chart as ChartJs,
  Tooltip,
  Title,
  ArcElement,
  Legend,
} from "chart.js/auto";
import { Chart, Doughnut, Pie } from "react-chartjs-2";
import a from "../../Components/Json/a.json";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
  labels: ["Carb", "Protein", "Fat"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 1,
    },
  ],
};

const CalculatorDetail = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.name === productId);
  const { name, category, img } = product;

  //   const [MacroTypes, setMacroTypes]= useState([]);
  //   const [TypeValues, setTypeValues]= useState([]);

  //   useEffect( ()=>{
  //     const typeMacro=[];
  //     const valueTypes=[];
  //     const getMacroData= async()=>{
  //     const reqData= await fetch("a.json");
  //     const resData= await reqData.json();
  //     for(let i=0; i< resData.length; i++)
  //     {
  //       typeMacro.push(resData[i].subject);
  //       valueTypes.push(parseInt(resData[i].marks));
  //     }
  //     setMacroTypes(MacroTypes);
  //     setTypeValues(TypeValues);
  //      //console.log(resData);
  //     }

  //     getMacroData();

  // },[]);

  return (
    <div>
      <Row noGutters>
        <Col xs={12} sm={12} md={1} lg={0} xl={2}></Col>

        <Col xs={12} sm={12} md={10} lg={12} xl={8}>
          <div className="fullpage">
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <div className="d-flex  align-items-center">
                <div className="d-flex mx-1">
                  <img className="Pimg px-0" src={img}></img>
                </div>
                <div className="mx-5">
                  <h1>{name}</h1>
                  <span>100gr</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="d-flex">
                  <div className="d-inline-block">
                    <input
                      type="number"
                      placeholder="100gr"
                      maxLength={2}
                      className=" mx-2 valueInput"
                    ></input>
                  </div>
                  <div className="valueType d-flex">
                    <select>
                      <option selected>Gr</option>
                      <option>Cup</option>
                      <option>Spoon</option>
                      <option>Test</option>
                    </select>
                  </div>
                </div>
              </div>
            </Col>
            <Row noGutters>
              <Col xs={11} sm={11} md={12} lg={12} xl={12}>
                <div className="Cal-Carb-Prot-Fat  mt-5  align-items-center d-flex mb-5 ">
                  <div className="pie ">
                    <Pie className="pie" data={data}></Pie>
                  </div>

                  <div className="Macro d-flex">
                    <div className=" px-1 text-center">
                      <span
                        style={{ color: "brown", fontFamily: "cursive" }}
                        className="d-block"
                      >
                        Calorie
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className="d-block"
                      >
                        15 <span> gr</span>
                      </span>
                      <span className="d-block">
                        % <span>68</span>
                      </span>
                    </div>

                    <div className="px-1 text-center">
                      <span
                        style={{ color: "darkcyan", fontFamily: "cursive" }}
                        className="d-block"
                      >
                        Carbohydriate
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className="d-block"
                      >
                        15 <span> gr</span>
                      </span>
                      <span className="d-block">
                        % <span>68</span>
                      </span>
                    </div>
                    <div className="px-1 text-center">
                      <span
                        style={{ color: "red", fontFamily: "cursive" }}
                        className="d-block"
                      >
                        Protein
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className="d-block"
                      >
                        15 <span> gr</span>
                      </span>
                      <span className="d-block">
                        % <span>68</span>
                      </span>
                    </div>
                    <div className="px-1 text-center">
                      <span
                        style={{
                          color: "orange",
                          fontFamily: "cursive",
                          opacity: "1",
                        }}
                        className="d-block"
                      >
                        Fat
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className="d-block"
                      >
                        15 <span> gr</span>
                      </span>
                      <span className="d-block">
                        % <span>68</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={12} sm={12} md={2} lg={2} xl={2}></Col>

        <Row noGutters>
          <Col xs={12} sm={12} md={1} lg={2} xl={2}></Col>
          <Col xs={12} sm={12} md={10} lg={12} xl={8}>
            {" "}
            <div className="fullpage">
              <h3 className="mx-3 py-5 mt-1">Nutritional Values</h3>
              <Table striped>
                <thead>
                  <tr>
                    <th></th>
                    <th> </th>
                    <th>10 gr</th>
                    <th>100 Gram</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Karbohydrates </th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">Protein</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">Fat</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">Fibre</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs={12} sm={12} md={1} lg={2} xl={2}></Col>
        </Row>
      </Row>
    </div>
  );
};

export default CalculatorDetail;
