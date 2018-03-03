import React, {Component} from 'react';
import './styles.scss';

import { NavLink } from 'react-router-dom';

export default class Sidenav extends Component {
   render() {
      return (
         <ul className="sidenav">
            <li><NavLink data-name="Início" exact to="/"><i className="material-icons">home</i></NavLink></li>
            <li><NavLink data-name="Portfolio" exact to="/projetos"><i className="material-icons">dashboard</i></NavLink></li>
            <li><NavLink data-name="Orçamentos" exact to="/orcamentos"><i className="material-icons">find_in_page</i></NavLink></li>
            <li><NavLink data-name="Clientes" exact to="/clientes"><i className="material-icons">perm_identity</i></NavLink></li>
            <li><NavLink data-name="Reviews" exact to="/reviews"><i className="material-icons">assignment_ind</i></NavLink></li>
            <li><NavLink data-name="Pedidos" exact to="/pedidos"><i className="material-icons">local_offer</i></NavLink></li>
            <li><NavLink data-name="Vendedores" exact to="/vendedores"><i className="material-icons">supervisor_account</i></NavLink></li>
            <li><NavLink data-name="Newsletter" exact to="/newsletter"><i className="material-icons">mail_outline</i></NavLink></li>
         </ul>
      );
   }
}
