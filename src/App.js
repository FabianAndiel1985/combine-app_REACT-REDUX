import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';


class App extends Component {

  constructor(props) {
    super(props);
    this.title = "combine app"
  }

  render() {
    return(
      <div id="landing-container" className="pt-3">
        <h1 class="text-center font-weight-bold">  Hi im the {this.title} <FontAwesomeIcon icon={faToolbox}/></h1>
        
        <div className="container mt-5" id="landing-carousel-container">
          <Carousel className="mx-auto">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./images/lightbulb.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Write donw your todos</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./images/numbers.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Count from 0 upwards</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./images/enjoy.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Enjoy</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>


      </div>
      )
  }
}
export default App;
