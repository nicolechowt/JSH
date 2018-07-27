import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Cleanses from "./Cleanses";
import Juice from "./Juice";
import Unconventional from "./Unconventional";
import WhoWeAre from "./WhoWeAre";
import BuildABox from "./BuildABox";
import Location from "./Location";
import { Grid, Row, Col } from 'react-bootstrap';
import WebFont from "webfontloader";

WebFont.load({
    google: {
      families: ['News Cycle']
    }
});

 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}> 
              <h1>Juice Served Here</h1>

                <ul className="header">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/buildABox">Build A Box</NavLink></li>            
                  <li><NavLink to="/cleanses">Cleanses</NavLink></li>
                  <li>
                    <div className="dropdown">
                      <NavLink to="/shop">Shop</NavLink>
                      <div className="dropdown-content">
                        <NavLink to="/juice">Juice</NavLink>
                      </div>
                    </div>
                  </li>
                  <li><NavLink to="/unconventional">The Unconventional</NavLink></li>
                  <li><NavLink to="/whoWeAre">Who we are</NavLink></li>
                </ul>


              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/buildABox" component={BuildABox}/>
                <Route path="/cleanses" component={Cleanses}/>
                <Route path="/juice" component={Juice}/>
                <Route path="/unconventional" component={Unconventional}/>
                <Route path="/whoWeAre" component={WhoWeAre}/>
              </div>
              <Location/>
            </Col>
          </Row>
        </Grid>
      </BrowserRouter>
    );
  }
}
 
export default Main;