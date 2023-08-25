import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const RecipesCategories = () => {
  const [selectedCheckboxes, setSelectedCheckBoxes] = useState([]);
  
  const { data } = useFetch(
    "http://localhost:1337/api/recipe-categories?populate=*"
  );

  if (!data) {
    return <div>Loading...</div>; // Return a loading indicator if data is not available yet
  }

  // console.log(data)
  const handleCheckBox = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedCheckBoxes(
      isChecked
        ? [...selectedCheckboxes, value]
        : selectedCheckboxes.filter((itemm) => itemm !== value)
    );
  };
  console.log(selectedCheckboxes);
  return (
    <div>
      {/* {Categories.map((cat) => ( */}
      {data?.map((item) => (
        <div
          class=" form-check"
          categoryValue={item?.attributes?.id}
          data_filter="all"
        >
          <br />

          <input
            onChange={ handleCheckBox}
            type="radio"
            class=" form-check-input"
            id="anime"
            name="hobby"
          />
          <label class="form-check-label" for="anime">
            <div key={item?.id}>{item?.attributes?.name}</div>
          </label>
        </div>
      ))}{" "}
      {/* ))} */}
    </div>
  );
};

export default RecipesCategories;
