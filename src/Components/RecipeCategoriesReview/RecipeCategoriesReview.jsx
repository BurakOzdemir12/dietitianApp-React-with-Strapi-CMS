import React from 'react'
import useFetch from '../hooks/useFetch';
import RecipiesCard from '../card/RecipiesCard';

const RecipeCategoriesReview = ({RecipeCatId}) => {
    const { data,loading } = useFetch(
        `http://localhost:1337/api/recipe-categories?populate=*&filters[id][$eq]=${RecipeCatId}`
    );
    console.log(data)
  return (
    <div>
      <RecipiesCard/>
    </div>
  )
}

export default RecipeCategoriesReview