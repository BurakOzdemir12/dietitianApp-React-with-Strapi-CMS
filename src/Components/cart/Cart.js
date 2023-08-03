import React, { Component } from "react";
import "../css/cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import diyetisyen1 from "../images/diyetisyen1.jpg";
import dietetician from "../images/About-img-home.jpg";
import { Col, Form, Input, Row } from "reactstrap";
import images from "../images/ProductImages.js";
import product1 from "../images/products/mango-overnight-oats-12-200x300.jpg";
class Cart extends Component {
  render() {
    return (
      <div>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="recipes">
            <h5 className="">RECIPES</h5>
          </div>
        </Col>
        <Row noGutters>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Form className="">
              <section className="Check-Boxes mt-5 mx-5 recipe-filters row">
                <div className="full">
                  <div className="desk-des">
                    <div class=" form-check" data-filter="all"> {/* Hepsi all Değiştirmeyi unutma */}
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

                    <div class="mt-4 form-check " data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4  form-check"data-filter="all">
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
                    <div class="mt-4  form-check" data-filter="all">
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
                    <div class="mt-4  form-check" data-filter="all">
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
                    <div class="mt-4  form-check" data-filter="all">
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
                    <div class="mt-4  form-check" data-filter="all">
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
                    <div class="mt-4  form-check" data-filter="all">
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
                    <div class="mt-4  form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4  form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
                    <div class="mt-4 form-check" data-filter="all">
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
          <Col className="" xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="recipe-grid-item">
              <a href="#">
                <div className="recipe-featured-image">
                  <img className="product1" src={product1}></img>
                </div>
                <h5 class="entry-title" itemprop="name">
                  Blackened Corn
                </h5>
              </a>
            </div>

            <div className="recipe-grid-item">
              <a href="#">
                <div className="recipe-featured-image">
                  <img className="product1" src={product1}></img>
                </div>
                <h5 class="entry-title" itemprop="name">
                  Blackened Corn
                </h5>
              </a>
            </div>

            <div className="recipe-grid-item">
              <a href="#">
                <div className="recipe-featured-image">
                  <img className="product1" src={product1}></img>
                </div>
                <h5 class="entry-title" itemprop="name">
                  Blackened Corn
                </h5>
              </a>
            </div>
          </Col>{" "}
          {/*container end */}
        </Row>
      </div>
    );
  }
}
export default Cart;
