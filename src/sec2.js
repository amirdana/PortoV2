import React from "react";
import form from "./imgs/p2-min.jpg";
import p3 from "./imgs/Mdesigne-min.png";
import p4 from "./imgs/p-1.svg";

function Sec2() {
  return (
    <section className="mySec2 ">
      <div className="column ">
        <div className="row filter">
          <div>UI/UX</div>
          <div>Front-end</div>
          <div>Back-end</div>
        </div>
        <div className="row mt-5  projs">
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
          <div
            id="p4"
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
            id="p5"
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
            id="p6"
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
