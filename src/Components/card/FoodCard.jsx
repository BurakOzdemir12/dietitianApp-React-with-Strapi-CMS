import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Card } from "reactstrap";
import "./card.css";
const FoodCard = ({ foods }) => {
  console.log(foods?.id)
  return (
    <div>
      <Link to={`/Calculator/${foods?.id}`}>
      <img
        className="food-image"
        key={foods?.id}
        src={`http://localhost:1337${foods?.attributes?.img?.data?.attributes?.url}`}
        alt=""
      />
      <h1 className='food-title'>{foods?.attributes?.name}</h1>
      </Link>
    </div>
    
  );
};

export default FoodCard;
