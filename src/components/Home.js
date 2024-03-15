import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center pt-40 h-screen bg-amber-400 child:bg-red-400 child:p-4 child:rounded-lg child:w-2/5 child-m">
        <Link to="/plan">
      <button className="">Plan Groceries</button>
        </Link>
      <br></br>
      <Link to="/start">
      <button className="">Start Groceries</button>
      </Link>
    </div>
  );
}

export default Home;
