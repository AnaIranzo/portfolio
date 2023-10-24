import React, { Component } from "react";
import { Link} from "react-scroll";


class Banner extends Component {
  render() {
    return  <section className="banner_section">
     
      <img src={''} id="banner_img" alt="" />
    
    <article id="banner_text">
     
      <p>
        Hi! My name is Ana and I wanted to create a porfolio where you can see amazing pictures and have a relaxing experience while seing a pick of my proyects.
      </p>
      <button>
        <Link
    activeClass="active"
    to="contact_form"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
      Email me!</Link></button>
    </article>
    
  </section>
  }
}

export default Banner;