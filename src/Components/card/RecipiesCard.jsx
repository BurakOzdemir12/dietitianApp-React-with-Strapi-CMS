import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "../../Pages/recipes/Recipes.css";
import { Col } from "reactstrap";

const RecipiesCard = ({ items }) => {
  let id = items?.id;

  const { data, loading } = useFetch(
    `http://localhost:1337/api/recipes?populate=*&filters[id][$eq]=${id}`
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div className="recipe-grid-item">
      <div>
        {/* Category: {data[0]?.attributes?.category} */}
        <Link key={data[0]?.id} to={`/recipes/${data[0]?.id}`}>
          <div className="recipe-featured-image">
            <img
              className="product1"
              src={`http://localhost:1337${data[0]?.attributes?.img?.data[0]?.attributes?.url}`}
              alt={data[0]?.attributes?.name}
            />
          </div>
          <h5 className="entry-title" itemprop="name">
            {data[0]?.attributes?.name}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default RecipiesCard;