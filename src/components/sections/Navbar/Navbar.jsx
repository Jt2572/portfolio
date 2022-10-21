import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import About from "../../pages/About/About";

import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";


const navbarData = [

  {
    id: 1,
    title: "About",
    to: "/",
  },
  {
    id: 2,
    title: "Works",
    to: "/works",
  },
  {
    id: 3,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>              
        <Route path="/works">
          <Portfolio />
        </Route>      
        <Route path="/contact">
          <Contact />
        </Route>  
      </Switch>
    </Router>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <NavLink
        to={to}
        activeClassName="text-blue-400"
        className="text-blue-900 text-medium hover:text-blue-700"
      >
        {title}
      </NavLink>
    </li>
  );
};
