import React, { Component } from "react";
import Carousel from "./Carousel";

class Home extends Component {
  render() {
    return (
      <div className="hello-content">
        <Carousel/>
        <div className="hello-words">
          <h2>HELLO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed felis congue, elementum sapien non, aliquam augue. Vivamus pellentesque, lorem sit amet bibendum varius, sem orci imperdiet lorem, et rutrum metus elit eu nibh. Morbi ut risus tempor, euismod elit vitae, porta magna. Integer ipsum nisl, faucibus sit amet dictum.</p>
        </div>
      </div>
    );
  }
}
 
export default Home;