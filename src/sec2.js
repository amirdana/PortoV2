import React from "react";
import form from "./imgs/p2-min.jpg";
import p3 from "./imgs/Mdesigne-min.png";
import p4 from "./imgs/p-1.svg";
import p5 from "./imgs/dash.png";
import p6 from "./imgs/md2.png";

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

  let demo = x => {
    switch (x) {
      case 3:
        window.open("http://rentic.ir/Mdesigne2/index.html");
        break;

      case 2:
        window.open("http://rentic.ir/Mdesigne/index.html");
        break;

      case 4:
        window.open("http://rentic.ir/dash/index.html");
        break;
      case 1:
        window.open("http://rentic.ir/instagramUI/p2.html");
        break;
      case 6:
        window.open("http://rentic.ir/weatherSt/p-1.html");
        break;
      case 5:
        window.open("https://www.bonzo.ir");
        break;
    }
  };
  return (
    <section className="mySec2 ">
      <div className="column ">
        <h1 className="text-center text-dark">Some Projects</h1>
        <hr />
        <div className="row filter">
          <div onClick={() => filter(1)}>UI/UX</div>
          <div onClick={() => filter(2)}>Front</div>
          <div onClick={() => filter(3)}>Back</div>
        </div>
        <div className="row mt-5  projs">
          <div
            id="p2"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              onClick={() => {
                demo(4);
              }}
              className="project4"
            >
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
            data-aos="fade-up"
          >
            <div
              onClick={() => {
                demo(3);
              }}
              className="project3"
            >
              <div className="holder">
                <img src={p6} alt="" />
              </div>
              <div className="flex-column">
                <h5>Modern Design</h5>
                <small>UI Implementation</small>
              </div>
            </div>
          </div>

          <div
            id="p1"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div
              onClick={() => {
                demo(2);
              }}
              className="project2"
            >
              <div className="holder">
                <img src={p3} alt="" />
              </div>
              <div className="flex-column">
                <h5>Modern Design</h5>
                <small>Modern UI</small>
              </div>
            </div>
          </div>
          <div
            id="p1"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              onClick={() => {
                demo(1);
              }}
              className="project1"
            >
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
            id="p3"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div
              onClick={() => {
                demo(5);
              }}
              className="project5"
            >
              <div className="holder bg-secondary flex-column">
                
              </div>
              <div className="flex-column">
                <h5>Online Store</h5>
                <small>Full-Stack client project</small>
              </div>
            </div>
          </div>

          <div
            id="p3"
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              onClick={() => {
                demo(6);
              }}
              className="project6"
            >
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
