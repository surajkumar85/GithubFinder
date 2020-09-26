import React from 'react'
import PropsType from "prop-types";
import {Link} from "react-router-dom" 

const Navbar =({icon ,title})=> {
        return (
            <nav className="navbar bg-primary">
              <h1><i className={icon} /> {title}</h1>  
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
              </ul>
            </nav>
        )
}
Navbar.defaultProps ={
    title: "GitHub Finder",
    icon: "fa fa-github"
}
Navbar.PropsType ={
    title: PropsType.string.isRequired,
    icon: PropsType.string.isRequired
}
export default Navbar
