import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import "../../Pages/recipes/Recipes.css";
const RecipiesCard = () => {
    const { data } = useFetch("http://localhost:1337/api/recipes?populate=*");
  return (
    <>
        
        {data?.map((item) => (
              <div className="recipe-grid-item  ">
                category :{item?.attributes?.category}
                <Link key={item?.id} to={`/recipes/${item.id}`}>
                  {console.log(item.id)}

                  <div className="recipe-featured-image">
                    <img
                      className="product1"
                      src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
                    ></img>
                  </div>
                  <h5 class="entry-title" itemprop="name">
                    {item?.attributes.name}
                  </h5>
                </Link>
              </div>
            ))}

    </>
  )
}

export default RecipiesCard