import React, { Component } from "react";
import Banner from "./Banner/Banner";
import Proyects from "./Proyects/Proyects";
import Contact from './Contact/Contact';
import About from './About/About';

class Main extends Component {
  render() {
    return <main>
    <Banner/>
    <Proyects/>
    <Contact/>
    <About/>
  
    
    </main>;
  }
}

export default Main;