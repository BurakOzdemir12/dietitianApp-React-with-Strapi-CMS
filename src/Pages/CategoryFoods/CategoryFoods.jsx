import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../Components/hooks/useFetch';
import FoodCard from '../../Components/card/FoodCard';
import Lists from '../../Components/list';


const CategoryFoods = () => {
  const catId = parseInt(useParams().id);
  
  
    // console.log(catId +" gelen id")
  return (
   <div>
    <Lists catId={catId}/>
    
   </div>
  )
}

export default CategoryFoods