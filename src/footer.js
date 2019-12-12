import React from "react";
import gits from "./imgs/gith.png";
function Footer() {
  return (
    <footer>
      <div className="myFooter">
        <img src={gits} alt="" />

        <p>Desing & Developed By AmirHossein Lavasani Dana</p>
        <p>CSR With React.js</p>
      </div>
    </footer>
  );
}

export default Footer;
