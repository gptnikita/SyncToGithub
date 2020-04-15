import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h2><a>Loyalty App</a></h2>
        <nav>
          <li><a >Order Food</a></li>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li>
          <li><a>Add number of visits</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;