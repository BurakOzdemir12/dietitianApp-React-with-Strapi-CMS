import React, { useState } from "react";
import useFetch from "../../Components/hooks/useFetch";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Row,
} from "reactstrap";
import { Categories } from "../../Components/Json/Categories";
import { Link, useParams } from "react-router-dom";
import "../../Pages/recipes/Recipes.css";
import RecipesCategories from "../../Components/RecipesCategories/RecipesCategories";
import RecipeCategoriesReview from "../../Components/RecipeCategoriesReview/RecipeCategoriesReview";

const Recipes = ({ direction, ...args }) => {
  const { data } = useFetch(
    "http://localhost:1337/api/recipe-categories?populate=*"
  );

  const all = data?.[20]?.attributes?.recipes?.data;
  const [selectedCheckboxes, setSelectedCheckBoxes] = useState(["ALL"]);
  const RecipeCatId = parseInt(useParams().id);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  if (!data) {
    return <div>Loading...</div>; // Return a loading indicator if data is not available yet
  }

  const handleCheckBox = (e) => {
    const value = e.target.value;
    setSelectedCheckBoxes([value]);
    // Set the state to an array containing only the current selected checkbox value
  };

  return (
    <div>
      <Col className="recipesCol" xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="recipes ">
          <h5 className="">RECIPES</h5>
        </div>
      </Col>

      <Row noGutters>
        <Col noGutters xs={12} sm={12} md={12} lg={3} xl={3}>
          <Form className="">
            <section className="  mt-1  recipe-filters ">
              <Dropdown
                className="filters   "
                // ref={menuRef}
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={direction}
                type="radio"
              >
                <DropdownToggle caret>
                  <div className="fliter  ">
                    <span className="filtertext  ">Filter</span>
                  </div>

                  <DropdownMenu {...args}>
                    {Categories.map((cat) => (
                      <DropdownItem toggle>
                        <div
                          class="mt-4 form-check"
                          categoryValue={cat.category}
                        >
                          {" "}
                          <input
                            type="radio"
                            class=" form-check-input"
                            id="anime"
                            name="hobby"
                          />
                          <label class="form-check-label" for="anime">
                            {cat.category}
                          </label>
                        </div>
                      </DropdownItem>
                    ))}
                    {/* ------------------------------------------------------------------ */}
                  </DropdownMenu>
                </DropdownToggle>
              </Dropdown>
            </section>

            <section className="Check-Boxes mt-5  mx-5 recipe-filters row">
              <div className="full">
                <div className="desk-des">
                  <div className="filters2">
                    {/* <RecipesCategories /> */}
                    {data?.map((item) => (
                      <div
                        class=" form-check"
                        categoryValue={item?.attributes?.id}
                        data_filter="all"
                      >
                        <br />

                        <input
                          onChange={handleCheckBox}
                          type="radio"
                          class=" form-check-input"
                          id="anime"
                          value={item.id}
                          name="hobby"
                          // checked="ALL"
                        />
                        <label class="form-check-label" for="anime">
                          <div key={item?.id}>{item?.attributes?.name}</div>
                        </label>
                      </div>
                    ))}{" "}
                  </div>
                </div>
              </div>
            </section>
          </Form>
        </Col>
        <Col noGutters className="" xs={12} sm={12} md={12} lg={9} xl={9}>
          <div className="  mt-5 recipe-container">
            <RecipeCategoriesReview selected={selectedCheckboxes} />
          </div>

          {/* Recipe-Container Ends */}
        </Col>{" "}
        {/*container end */}
      </Row>
    </div>
  );
};

export default Recipes;
