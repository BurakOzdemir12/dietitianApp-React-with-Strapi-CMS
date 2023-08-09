import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../Components/navi/Navi";
import "bootstrap/dist/css/bootstrap.min.css";

import Calculator, { CalculatorAction } from "../Pages/calculator/Calculator";
import Dietician from "../Pages/dieticianList/Dietician";
import Home from "../Pages/home/Home";
import Cart from "../Pages/cart/Cart";

import CountUp from "react-countup";
import Footer from "../Components/footer/Footer";
import ScrollToTop from "../Components/scrollToTop/ScrollToTop";
import ReloadScroll from "../Components/reloadScroll/ReloadScroll";



function App() {
  return (
    <div>
      <BrowserRouter>
        <ReloadScroll />
        <Navi />
        
        <Routes>
          <Route path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route  path="/cart" Component={Cart} />
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
