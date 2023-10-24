import React, { Component } from "react";
import { Link } from "react-scroll";
class Nav extends Component {
  render() {
    return <nav>
      <h2>Ana E. Iranzo Molina</h2>
      <div className="nav_links">
    <Link to="/">Home</Link>
    <Link
    activeClass="active"
    to="contact_form"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Contact</Link>
<Link
    activeClass="active"
    to="proyects"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Proyects</Link>
<Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>About</Link>
    
      </div>
    
    </nav>
  }
}

export default Nav;