import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '~/components/ThirdParty';

import '~/components/GlobalStyles';
import Navbar from '~/components/Navbar';
import Sidenav from '~/components/Sidenav';
import BackgroundImg from '~/components/BackgroundImg';

import Home from '~/views/Home';
import Projetos from '~/views/Projetos';
import Orcamentos from '~/views/Orcamentos';
import Clientes from '~/views/Clientes';
import Reviews from '~/views/Reviews';
import Pedidos from '~/views/Pedidos';
import Vendedores from '~/views/Vendedores';
import Newsletter from '~/views/Newsletter';

import Login from '~/views/Login';

class App extends Component {
   componentWillMount(){
      document.body.style.color = '#2B4966';
   }
   componentWillUnmount(){
      document.body.style.color = null;
   }
   render() {
      return (
         <div>
            <BackgroundImg />
            <Navbar />
            <div className="container">
               <div className="row">
                  <Route exact path="(.*[^login])" component={Sidenav} />
                  {/* <Sidenav /> */}
                  <div className="col-xs-12 col-sm">
                     <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projetos" component={Projetos} />
                        <Route exact path="/orcamentos" component={Orcamentos} />
                        <Route exact path="/clientes" component={Clientes} />
                        <Route exact path="/reviews" component={Reviews} />
                        <Route exact path="/pedidos" component={Pedidos} />
                        <Route exact path="/vendedores" component={Vendedores} />
                        <Route exact path="/newsletter" component={Newsletter} />
                     </Switch>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;

function getScrollbarWidth() {
   var outer = document.createElement("div");
   outer.style.visibility = "hidden";
   outer.style.width = "100px";
   outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

   document.body.appendChild(outer);

   var widthNoScroll = outer.offsetWidth;
   // force scrollbars
   outer.style.overflow = "scroll";

   // add innerdiv
   var inner = document.createElement("div");
   inner.style.width = "100%";
   outer.appendChild(inner);

   var widthWithScroll = inner.offsetWidth;

   // remove divs
   outer.parentNode.removeChild(outer);

   return widthNoScroll - widthWithScroll + 'px';
}
