import React from "react";

function Nav() {
  return (
    <div className="mynav">
      <div className="row flex-fill d-flex justify-content-around">
        <h1 className="text-white">Amir Dana</h1>

        <div className=" nav-itm">
          <a href="">Home</a>
          <a href="">Resume</a>
          <a href="">Github</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
