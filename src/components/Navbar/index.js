import React, { Component } from 'react';
import LogoShort from '~/components/LogoShort';
import { PortalLightCircle } from '~/components/LogoMilky';
import { Milky } from '~/components/LogoMilky';
import './styles.scss';
// import { NavLink } from 'react-router-dom';
// import NavItem from './components/NavItem';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
   render() {
      return (
         <nav className="navbar">
            <div className="container">
               <div className="portal" style={{marginLeft:'12px'}}>
                  <Link to="/"><PortalLightCircle color="#fff" height="64px"/></Link>
               </div>
               <div className="milkyway">
                  <Link to="/"><Milky color="#fff" height="46px"/></Link>
               </div>
            </div>
         </nav>
      )
   }
}
