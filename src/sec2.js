import React from "react";
import form from "./imgs/p2-min.jpg";
import p3 from "./imgs/Mdesigne-min.png";
import p4 from "./imgs/p-1.svg";
import p5 from "./imgs/dash.png";
import p6 from "./imgs/hnad.jpg";

function Sec2() {
  const filter = x => {
    if (x === 0) {
      document.querySelectorAll("#p2,#p3,#p1 ").forEach(x => {
        x.style.transitionDuration = "0.2s";
        x.style.transform = "scale(1)";
      });
    }
    if (x === 1) {
      document.querySelectorAll("#p1").forEach(x => {
        x.style.transform = "scale(1)";
        x.style.transitionDuration = "0.2s";
      });
      document.querySelectorAll("#p2,#p3").forEach(x => {
        x.style.transitionDuration = "0.2s";
        x.style.transform = "scale(0.7)";
      });
    }
    if (x === 2) {
      document.querySelectorAll("#p2").forEach(x => {
        x.style.transform = "scale(1)";
        x.style.transitionDuration = "0.2s";
      });
      document.querySelectorAll("#p1,#p3").forEach(x => {
        x.style.transitionDuration = "0.2s";
        x.style.transform = "scale(0.7)";
      });
    }
    if (x === 3) {
      document.querySelectorAll("#p3").forEach(x => {
        x.style.transform = "scale(1)";
        x.style.transitionDuration = "0.2s";
      });
      document.querySelectorAll("#p2,#p1").forEach(x => {
        x.style.transitionDuration = "0.2s";
        x.style.transform = "scale(0.7)";
      });
    }
  };
  return (
    <section className="mySec2 ">
      <div className="column ">
        <h1 className="text-center text-dark">Projects</h1>
        <hr />
        <div className="row filter">
          <div onClick={() => filter(0)}>All</div>
          <div onClick={() => filter(1)}>UI/UX</div>
          <div onClick={() => filter(2)}>Front</div>
          <div onClick={() => filter(3)}>Back</div>
        </div>
        <div className="row mt-5  projs">
          <div
            id="p2"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
          >
            <div className="project3">
              <div className="holder">
                <img src={p4} alt="" />
              </div>
              <div className="flex-column">
                <h5>Weather API</h5>
                <small>Weather Stats via API fetch</small>
              </div>
            </div>
          </div>

          <div
            id="p1"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
          >
            <div className="project2">
              <div className="holder">
                <img src={p3} alt="" />
              </div>
              <div className="flex-column">
                <h5>Modern Designe</h5>
                <small>Modern UI</small>
              </div>
            </div>
          </div>
          <div
            id="p2"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
          >
            <div className="project3">
              <div className="holder">
                <img src={p5} alt="" />
              </div>
              <div className="flex-column">
                <h5>DashBoard</h5>
                <small>Front-end Dash</small>
              </div>
            </div>
          </div>
          <div
            id="p1"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
          >
            <div className="project1">
              <div className="holder">
                <img src={form} alt="" />
              </div>
              <div className="flex-column">
                <h5>Instagram</h5>
                <small>Instagram UI</small>
              </div>
            </div>
          </div>
          <div
            id="p2"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
          >
            <div className="project3">
              <div className="holder">
                <img src={p6} alt="" />
              </div>
              <div className="flex-column">
                <h5>Hand Detection</h5>
                <small>Third Party Lib</small>
              </div>
            </div>
          </div>
          <div
            id="p3"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
          >
            <div className="project3">
              <div className="holder">
                <img src={p4} alt="" />
              </div>
              <div className="flex-column">
                <h5>Weather API</h5>
                <small>Weather Stats via API fetch</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec2;
