import React from "react";
import web from "./imgs/web.jpg";
import mobile from "./imgs/android.svg";

function Sec3() {
  return (
    <section>
      <div className="mySec3 ">
        <h1 className="text-center text-dark m-0 mt-5">Skills</h1>
        <hr />
        <div className="s3ct">
          <div className="row ">
            <div
              data-aos="fade-up"
              className="col-md-6 d-flex justify-content-center"
            >
              <div className="mobile-res">
                <div className="text-center">
                  <img src={mobile} alt="dd" />
                </div>
                <div className="text-center mt-5">
                  <h6 className="mb-5">Familar With</h6>
                  <p>React Native</p>
                  <p>B4A</p>
                  <p>Hybrid OOP</p>
                  <p>Hardware engaged PR</p>
                  <p>Couple of published app</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-md-6 d-flex justify-content-center"
            >
              <div className="web-res">
                <div className="text-center">
                  <img src={web} alt="dd" />
                </div>
                <div className="text-center mt-5">
                  <h6 className="mb-5">Main Skills</h6>
                  <p>ES2019 & js OOP</p>
                  <p>React.js</p>
                  <p>PHP & MySQL</p>
                  <p>Node & Express.js Basics</p>
                  <p>UI/UX</p>
                  <a href="https://jobinja.ir/user/RQ-2433343">Full list</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec3;
