import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../Components/navi/Navi";
import "bootstrap/dist/css/bootstrap.min.css";

import Calculator, { CalculatorAction } from "../Pages/calculator/Calculator";
import Dietician from "../Pages/dieticianList/Dietician";
import Home from "../Pages/home/Home";
import Recipes from "../Pages/recipes/Recipes";

import CountUp from "react-countup";
import Footer from "../Components/footer/Footer";
import ScrollToTop from "../Components/scrollToTop/ScrollToTop";
import ReloadScroll from "../Components/reloadScroll/ReloadScroll";

import FoodDetail from "../Pages/food/FoodDetail";



function App() {
  return (
    <div>
      <BrowserRouter>
        <ReloadScroll />
        <Navi />
        
        <Routes>
          <Route path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route  path="/Recipes" Component={Recipes} />
          <Route  path="recipes/:recipesId" element= {<FoodDetail/>}/>
         
          <Route  path="/calculator" Component={Calculator}  />
          <Route  path="/dieticianList" element={Dietician} />
          
         
        </Routes>
        
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
