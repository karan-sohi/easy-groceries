import "./App.css";   
import { PRODUCTS } from "./products";
import StartProduct from "./components/StartProduct";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plan from "./components/Plan";
import Start from "./components/Start";

function App() {
  return (
    <div className="bg-slate-200 text-center">
      {/* <h1 className="text-xl p-4">Finally Groceries made easy</h1> */}
      {/* {
        PRODUCTS.map(product => {
          return (
            <StartProduct product={product}></StartProduct>
          );
        }
        ) 
      } */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/plan" element={<Plan></Plan>}></Route>
        <Route path="/start" element={<Start></Start>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
