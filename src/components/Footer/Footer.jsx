import React, { Component } from "react";
import { Link } from "react-scroll";
/* import instagram from '../Footer/assets/ig.svg';
import facebook from '../Footer/assets/free_icon_1.svg'; */

class Footer extends Component {
  render() {
    return <footer>


      <div className="social">
      {/*   <Link><img src={instagram} alt="" srcset="" /></Link>
        <Link><img src={facebook} alt="" srcset="" /></Link>
 */}
      </div>
     
      <div className="links">
        <Link>Github</Link>
        <Link>Linkedin</Link>
        
      </div>


    </footer>;
  }
}

export default Footer;