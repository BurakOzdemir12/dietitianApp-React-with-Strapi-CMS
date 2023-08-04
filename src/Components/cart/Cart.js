import React, { Component, useState } from "react";
import "../css/cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import diyetisyen1 from "../images/diyetisyen1.jpg";
import dietetician from "../images/About-img-home.jpg";
import { Foods } from "../foods/Foods";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Row,
} from "reactstrap";
import images from "../images/ProductImages.js";
import product1 from "../images/products/mango-overnight-oats-12-200x300.jpg";
function Cart({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
  return (
    <div>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="recipes ">
          <h5 className="">RECIPES</h5>
        </div>
      </Col>
      <Row noGutters>
        <Col noGutters xs={12} sm={12} md={10} lg={3} xl={3}>
          <Form className="">
            <section className=" mt-0 mt-5  recipe-filters row">
              <Dropdown
                className="filters "
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={direction}
              >
                <DropdownToggle caret>
                  <div className="fliter">
                    <span className="filtertext">Filter</span>
                  </div>

                  <DropdownMenu {...args}>
                    <DropdownItem>
                      <div class="mt-4 form-check" data-filter="all">
                        {" "}
                        {/* Hepsi all Değiştirmeyi unutma */}
                        <input
                          type="checkbox"
                          class=" form-check-input"
                          id="anime"
                          name="hobby"
                        />
                        <label class="form-check-label" for="anime">
                          ALL
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-air-fryer"
                      >
                        {" "}
                        {/* Hepsi all Değiştirmeyi unutma */}
                        <input
                          type="checkbox"
                          class=" form-check-input"
                          id="anime"
                          name="hobby"
                        />
                        <label class="form-check-label" for="anime">
                          AIR FRYER
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4 form-check "
                        data-filter=".category-appetizers"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class=" form-check-label" for="manga">
                          APPETIZER RECIPES
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-beverages"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          BEVERAGES{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4  form-check"
                        data-filter=".category-breakfast"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          BREAKFAST{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4  form-check"
                        data-filter=".category-desserts"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          DESSERTS{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4  form-check"
                        data-filter=".category-dinner"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          DINNER{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4  form-check"
                        data-filter=".category.fall"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          FALL{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4  form-check"
                        data-filter=".category-gluten-free"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          GLUTEN-FREE{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4  form-check"
                        data-filter=".category-holiday-recipes"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          HOLIDAY RECIPES{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4  form-check"
                        data-filter=".category-instant-pot-slow-cooker"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          INSTANT POT & SLOW COOKER{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-lunch"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          LUNCH{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4  form-check"
                        data-filter=".category-salads"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          SALADS{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-sides"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          SIDES{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-snacks"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          SNACKS{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-soups-stews"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          SOUPS & STEWS{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-spring"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          SPRING{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-summer"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          SUMMER{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-vegan"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          VEGAN{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-vegetarian"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          VEGETARIAN{" "}
                        </label>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <div
                        class="mt-4 form-check"
                        data-filter=".category-winter"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="manga"
                          name="hobby"
                        />
                        <label class="form-check-label" for="manga">
                          WINTER{" "}
                        </label>
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </DropdownToggle>
              </Dropdown>
            </section>

            <section className="Check-Boxes mt-5 mx-5 recipe-filters row">
              <div className="full">
                <div className="desk-des">
                  <div className="filters2">
                    <div class=" form-check" data-filter="all">
                      {" "}
                      {/* Hepsi all Değiştirmeyi unutma */}
                      <input
                        type="checkbox"
                        class=" form-check-input"
                        id="anime"
                        name="hobby"
                      />
                      <label class="form-check-label" for="anime">
                        All
                      </label>
                    </div>
                    <div class=" form-check" data-filter=".category-air-fryer">
                      {" "}
                      {/* Hepsi all Değiştirmeyi unutma */}
                      <input
                        type="checkbox"
                        class=" form-check-input"
                        id="anime"
                        name="hobby"
                      />
                      <label class="form-check-label" for="anime">
                        AIR FRYER
                      </label>
                    </div>{" "}
                    <div
                      class="mt-4 form-check "
                      data-filter=".category-appetizers"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class=" form-check-label" for="manga">
                        APPETIZER RECIPES
                      </label>
                    </div>
                    <div
                      class="mt-4 form-check"
                      data-filter=".category-beverages"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        BEVERAGES{" "}
                      </label>
                    </div>
                    <div
                      class="mt-4  form-check"
                      data-filter=".category-breakfast"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        BREAKFAST{" "}
                      </label>
                    </div>
                    <div
                      class="mt-4  form-check"
                      data-filter=".category-desserts"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        DESSERTS{" "}
                      </label>
                    </div>{" "}
                    <div
                      class="mt-4  form-check"
                      data-filter=".category-dinner"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        DINNER{" "}
                      </label>
                    </div>
                    <div class="mt-4  form-check" data-filter=".category.fall">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        FALL{" "}
                      </label>
                    </div>
                    <div
                      class="mt-4  form-check"
                      data-filter=".category-gluten-free"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        GLUTEN-FREE{" "}
                      </label>
                    </div>{" "}
                    <div
                      class="mt-4  form-check"
                      data-filter=".category-holiday-recipes"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        HOLIDAY RECIPES{" "}
                      </label>
                    </div>{" "}
                    <div
                      class="mt-4  form-check"
                      data-filter=".category-instant-pot-slow-cooker"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        INSTANT POT & SLOW COOKER{" "}
                      </label>
                    </div>{" "}
                    <div class="mt-4 form-check" data-filter=".category-lunch">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        LUNCH{" "}
                      </label>
                    </div>
                    <div
                      class="mt-4  form-check"
                      data-filter=".category-salads"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        SALADS{" "}
                      </label>
                    </div>
                    <div class="mt-4 form-check" data-filter=".category-sides">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        SIDES{" "}
                      </label>
                    </div>{" "}
                    <div class="mt-4 form-check" data-filter=".category-snacks">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        SNACKS{" "}
                      </label>
                    </div>{" "}
                    <div
                      class="mt-4 form-check"
                      data-filter=".category-soups-stews"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        SOUPS & STEWS{" "}
                      </label>
                    </div>
                    <div class="mt-4 form-check" data-filter=".category-spring">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        SPRING{" "}
                      </label>
                    </div>{" "}
                    <div class="mt-4 form-check" data-filter=".category-summer">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        SUMMER{" "}
                      </label>
                    </div>
                    <div class="mt-4 form-check" data-filter=".category-vegan">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        VEGAN{" "}
                      </label>
                    </div>{" "}
                    <div
                      class="mt-4 form-check"
                      data-filter=".category-vegetarian"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        VEGETARIAN{" "}
                      </label>
                    </div>{" "}
                    <div class="mt-4 form-check" data-filter=".category-winter">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="manga"
                        name="hobby"
                      />
                      <label class="form-check-label" for="manga">
                        WINTER{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="disabled" disabled name="hobby" />
    <label class="form-check-label" for="disabled">Disabled</label>
  </div> */}
            {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="disabled-checked" disabled checked name="hobby" />
    <label class="form-check-label" for="disabled-checked">Default</label>
  </div> */}
          </Form>
        </Col>
        <Col noGutters className="" xs={12} sm={12} md={12} lg={9} xl={9}>
       
          <div className=" mx-5 mt-5 recipe-container">
          {Foods.map((item) =>(
           <div className="recipe-grid-item">
           <a href="#">
             <div className="recipe-featured-image">
               <img className="product1" src={item.img}></img>
             </div>
             <h5 class="entry-title" itemprop="name">
              {item.name}
             </h5>
           </a>
         </div>

          ) )}
           

          </div>
          {/* Recipe-Container Ends */}
        </Col>{" "}
        {/*container end */}
      </Row>
    </div>
  );
}

export default Cart;
