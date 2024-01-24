import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div >
      <div class="bg-white flex flex-col md:flex-row  px-20 py-5 font-medium">
        <div class="basis-9/12 font-mono text-4xl font-bold text-rose-800">
          MixMaster
        </div>
        <div class="basis-1/12 my-3"><Link to={"/"}>Home</Link></div>
        <div class="basis-1/12 my-3">
          <Link to={"/about"}>About</Link>
        </div>
        <div class="basis-1/12 my-3">
          <Link to={"/newsletter"}>Newsletter</Link>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
