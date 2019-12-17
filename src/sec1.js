import React from "react";
import Typewriter from "typewriter-effect/dist/core";
import gith from "./imgs/gith.png";
import headimgmin from "./imgs/headimg-min.png";
function Sec1() {
  window.addEventListener("load", () => {
    //typewriter
    var app = document.getElementById("app");
    var typewriter = new Typewriter(app, {
      loop: true
    });
    typewriter
      .typeString("Im a Fullstack-dev")
      .pauseFor(200)
      .deleteChars(13)
      .typeString("Front-end master")
      .pauseFor(200)
      .deleteChars(16)
      .typeString("UI/UX desginer")
      .pauseFor(200)
      .start();
    //end
  });

  return (
    <section className="mySec1">
      <div className="row head">
        <div className="col-lg-6 p-0 head-left">
          <div className="col-md-10 col-sm-12">
            <h1 className=" text-white" id="app"></h1>
            <div className="row">
              <a href="https://github.com/amirdana">
                <img className="mt-3" src={gith} alt="" />
              </a>
              <p className="mt-4">Feel free to check out my PROJECTS.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-0 head-right">
          <img src={headimgmin} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Sec1;
