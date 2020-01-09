import React from "react";
import gits from "./imgs/gith.png";
function Footer() {
  return (
    <footer>
      <div className="myFooter">
        <a href="https://github.com/amirdana">
          <img src={gits} alt="" />
        </a>
        <p>Desing & Developed By AmirHossein Lavasani Dana</p>
        <p>CSR With React.js</p>
      </div>
    </footer>
  );
}

export default Footer;
