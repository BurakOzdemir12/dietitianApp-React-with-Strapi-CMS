import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { Card } from 'reactstrap';
import "./card.css"
const FoodCard = ({foods}) => {

   
  return (
    <div>
        
      
       <div className="itemss">
                  <h1 className='food-title'>{foods?.name}</h1>

                  <img className='food-image'
                    key={foods.id}
                    src={`http://localhost:1337${foods?.img?.data?.attributes?.url}`}
                    alt=""
                  />
                </div>
      




    </div>
  )
}

export default FoodCard