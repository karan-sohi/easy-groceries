import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-auto">
      <div className="text-center">
        <img className="h-72 w-4/11 m-auto" src="./website-logo.png" />
      </div>
      <div className="flex flex-col font-bold items-center text-white pt-4 bg-inherit child:bg-red-400 child:p-4 child:rounded-lg child:w-3/5">
        <Link to="/plan">
          <button className="">PLAN ITEMS</button>
        </Link>
        <br></br>
        <Link to="/start">
          <button className="">START </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
