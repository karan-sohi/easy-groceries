import "./App.css";   
import { PRODUCTS } from "./products";
import Product from "./Product";

function App() {
  return (
    <div className="bg-slate-200 p-2 text-center">
      <h1 className="text-xl p-4">Finally Groceries made easy</h1>
      {
        PRODUCTS.map(product => {
          return (
            <Product product={product}></Product>
          );
        })
      }
    </div>
  );
}

export default App;
