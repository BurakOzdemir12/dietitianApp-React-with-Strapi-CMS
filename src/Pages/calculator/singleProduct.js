import React from "react";
import  {products}  from "../../Components/Json/NutritionalItems";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
export const SingleProduct = () => {
  const { productId } = useParams();
const product=products.find((product)=>product.name=== productId);
const {name,category,img}=product;
  return( <div>
    <div className="">

    
    <Row noGutters>
<Col   xs={12} sm={12} md={12} lg={12} xl={12}>
<h1>{productId}</h1>
<img src={img}></img>
<h1>{name}</h1>
<h1>{category}</h1>
</Col>
<Col  xs={12} sm={12} md={12} lg={12} xl={12}>
    
    <h1></h1>
</Col>
    </Row>
    
    </div>
  </div>
  )
};
