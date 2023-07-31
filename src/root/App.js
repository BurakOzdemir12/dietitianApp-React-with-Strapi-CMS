import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../Components/navi/Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Components/home/Home";
import Cart from "../Components/cart/Cart";
function App() {
  return (
    <Container>
      <Navi/>

   <Routes>
   
    <Route  path="/home"   Component={Home} />
    <Route path="/cart" Component={Cart} />
   </Routes>
    </Container>
  );
}

export default App;
