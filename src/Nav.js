import React from "react";

function Nav() {
  return (
    <div className="mynav">
      <div className="row flex-fill d-flex justify-content-around">
        <h1 className="text-white">Amir Dana</h1>

        <div className=" nav-itm">
          <a href="https://www.amirdana.ir/">Home</a>
          <a href="https://jobinja.ir/user/RQ-2433343">Resume</a>
          <a href="https://github.com/amirdana">Github</a>
          
        </div>
      </div>
    </div>
  );
}

export default Nav;
