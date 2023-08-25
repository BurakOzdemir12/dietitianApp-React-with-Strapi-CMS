import React, { useEffect, useState } from "react";
import {
  facts,
  option,
  products,
} from "../../Components/Json/NutritionalItems";
import { useParams } from "react-router-dom";
import { Col, Dropdown, DropdownItem, Input, Row, Table } from "reactstrap";
import "../calculator/calculatorDetail.css";
import CountUp from "react-countup";

import {
  Chart as ChartJs,
  Tooltip,
  Title,
  ArcElement,
  Legend,
} from "chart.js/auto";
import { Chart, Doughnut, Pie } from "react-chartjs-2";
import a from "../../Components/Json/a.json";
import useFetch from "../../Components/hooks/useFetch";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Data = {
  labels: ["% Carb", " % Protein", " % Fat"],
  datasets: [
    {
      label: "",
      data: [21, 45, 98],
      backgroundColor: ["#008b8b", "rgb(255, 99, 132)", "rgb(255, 205, 86)"],
      hoverOffset: 1,
    },
  ],
};

const CalculatorDetail = () => {
const{id}=useParams()
  const { data } = useFetch(`http://localhost:1337/api/foods/${id}?populate=*`);

  const [selected, setSelected] = useState(option[0].valu);

  const [val, setVal] = useState(100);


 
  const [CalValue, setCalValue] = useState(data?.attributes?.kcal);
  const [CarbValue, setCarbValue] = useState(data?.attributes?.carb);
  const [ProtValue, setProtValue] = useState(data?.attributes?.protein);
  const [FatValue, setFatValue] = useState(data?.attributes?.fat);

  const [FibrValue, setFibValue] = useState(data?.attributes?.fibr);
  const [ColestValue, setColValue] = useState(data?.attributes?.colest);
  const [SodiumValue, setSodValue] = useState(data?.attributes?.sodium);
  const [potassiumValue, setPotasValue] = useState(data?.attributes?.potass);
  const [CalsValue, setCalsValue] = useState(data?.attributes?.calsium);
  const [vitAValue, setvitAValue] = useState(data?.attributes?.vitA);
  const [vitCValue, setvitCValue] = useState(data?.attributes?.vitC);
  const [IronValue, setIronValue] = useState(data?.attributes?.iron);

 
  const selecthandle = (e) => {};

  const CalcHandling = (e) => {
    // setVal(e.target.value);

    const Gramage = e.target.value;

    
    setSelected(e.target.valu);
    
    setVal(Gramage);
    console.log(val)

    setCalValue((data?.attributes?.kcal * e.target.value) /100);
    setCarbValue((data?.attributes?.carb * e.target.value) / 100);
    setProtValue((data?.attributes?.protein * e.target.value) / 100);
    setFatValue((data?.attributes?.fat * e.target.value) / 100);

    setFibValue((data?.attributes?.fibr * e.target.value) / 100);
    setColValue((data?.attributes?.colest * e.target.value) / 100);
    setSodValue((data?.attributes?.sodium * e.target.value) / 100);
    setPotasValue((data?.attributes?.potass * e.target.value) / 100);
    setCalsValue((data?.attributes?.calsium * e.target.value) / 100);
    setvitAValue((data?.attributes?.vitA * e.target.value) / 100);
    setvitCValue((data?.attributes?.vitC * e.target.value) / 100);
    setIronValue((data?.attributes?.iron * e.target.value) / 100);
  };

  useEffect(() => {
    
    setCalValue(data?.attributes?.kcal);
    setCarbValue(data?.attributes?.carb);
    setProtValue(data?.attributes?.protein)
    setFatValue(data?.attributes?.fat)

    setFibValue(data?.attributes?.fibr)
    setColValue(data?.attributes?.colest)
    setSodValue(data?.attributes?.sodium)
    setPotasValue(data?.attributes?.potass)
    setCalsValue(data?.attributes?.calsium);
    setvitAValue(data?.attributes?.vitA);
    setvitCValue(data?.attributes?.vitC);
    setIronValue(data?.attributes?.iron);
  }, [data]);


  return (
  
    <div>
      <Row noGutters>
        <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={8}>
          <div className="" style={{ height: "auto" }}>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <div className="d-flex  align-items-center">
                <div className="imgCont d-flex mx-2">
                  <img className="Pimg px-0" src={`http://localhost:1337${data?.attributes?.img?.data?.attributes?.url}`}></img>
                </div>
                <div className="mx-5">
                  <h1>{data?.attributes?.name}</h1>
                  <span style={{ fontWeight: "bolder" }}>{val} gr</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="inp d-flex">
                  <div className=" inp d-inline-block">
                    <Input
                      onChange={CalcHandling}
                      typeof="number"
                      type="text"
                      placeholder="100"
                      maxLength={4}
                      className=" mx-2 valueInput"
                    ></Input>
                  </div>
                  <div className="valueType d-flex">
                    <select value={selected} onChange={CalcHandling}>
                      {option.map((option) => (
                        <option key={option.valu} value={option.valu}>
                          {option.text} {option.gramValue}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </Col>
            <Row noGutters>
              <Col xs={11} sm={11} md={12} lg={12} xl={12}>
                <div className="Cal-Carb-Prot-Fat  mt-5  align-items-center d-flex mb-5 ">
                  <div className="pie ">
                    <Pie className="pie" data={Data}></Pie>
                  </div>

                  <div className="Macro d-flex  ">
                    <div className=" px-1 text-center num">
                      <span
                        style={{ color: "brown", fontFamily: "cursive" }}
                        className="d-block"
                      >
                        Calorie
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className=" d-block"
                      >
                        <CountUp isCounting end={CalValue} duration={1.2} />

                        <span> gr</span>
                      </span>
                      <span className="d-block"></span>
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
                        <CountUp isCounting end={CarbValue} duration={1.2} />{" "}
                        <span> gr</span>
                      </span>
                      <span className="d-block">
                        <span></span>
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
                        <CountUp isCounting end={ProtValue} duration={1.2} />{" "}
                        <span> gr</span>
                      </span>
                      <span className="d-block">
                        <span></span>
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
                        <CountUp isCounting end={FatValue} duration={1.2} />{" "}
                        <span> gr</span>
                      </span>
                      <span className="d-block">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>

        <Row noGutters>
          <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={8}>
            {" "}
            <div className="fullpage">
              <h3 className="mx-3 py-5 mt-1">Nutritional Facts</h3>
              <Table striped>
                <thead>
                  <tr>
                    <th></th>
                    <th> </th>
                    <th>100 gr</th>
                    <th>
                      {" "}
                      <CountUp isCounting end={val} duration={1.2} /> gr
                    </th>
                  </tr>
                </thead>
                <tbody>
                 
                  <tr>
                    <th scope="row">Carbohydrates (g) </th>
                    <td></td>
                    <td>{data?.attributes?.carb}</td>
                    <td>
                      <CountUp isCounting end={CarbValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Protein (g)</th>
                    <td></td>
                    <td>{data?.attributes?.protein}</td>
                    <td> <CountUp isCounting end={ProtValue} duration={1.2} /></td>
                  </tr>
                  <tr>
                    <th scope="row">Fat (g)</th>
                    <td></td>
                    <td>{data?.attributes?.fat}</td>
                    <td><CountUp isCounting end={FatValue} duration={1.2} /></td>
                  </tr>

                  <tr>
                    <th scope="row">Fibre (g)</th>
                    <td></td>
                    <td>{data?.attributes?.fibr} </td>
                    <td><CountUp isCounting end={FibrValue} duration={1.2} /></td>
                  </tr>
                  <tr>
                    <th scope="row">cholesterol (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.colest}</td>
                    <td><CountUp isCounting end={ColestValue} duration={1.2} /></td>
                  </tr>
                  <tr>
                    <th scope="row">Sodium (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.sodium}</td>
                    <td><CountUp isCounting end={SodiumValue} duration={1.2} /></td>
                  </tr>
                  <tr>
                    <th scope="row">Potassium (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.potass}</td>
                    <td><CountUp isCounting end={potassiumValue} duration={1.2} /></td>
                  </tr>
                  <tr>
                    <th scope="row">Calcium (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.calsium}</td>
                    <td><CountUp isCounting end={CalsValue} duration={1.2} /></td>
                  </tr>
                  <tr>
                    <th scope="row">Vitamin A (iu)</th>
                    <td></td>
                    <td>{data?.attributes?.vitA}</td>
                    <td><CountUp isCounting end={vitAValue} duration={1.2} /></td>
                  </tr>
                  <tr>
                    <th scope="row">Vitamin C (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.vitC}</td>
                    <td><CountUp isCounting end={vitCValue}duration={1.2} /></td>
                  </tr>
                  <tr>
                    <th scope="row">Iron</th>
                    <td></td>
                    <td>{data?.attributes?.iron}</td>
                    <td><CountUp isCounting end={IronValue} duration={1.2} /></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>
        </Row>
      </Row>
    </div>
  );
};

export default CalculatorDetail;
