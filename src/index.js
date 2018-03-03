import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/App';
import { Metas } from '~/components/Metas';
// import ExtraColors from '~/components/ExtraColors';
import Favicon from '~/components/Favicon';
import Ceres from '~/components/Ceres';
import { BrowserRouter, Route } from 'react-router-dom';

const title = "The Last Flame";
const description = "The Last Flame is a indie game development company. We hope to lit your way and make you fall in love with our games :)";

ReactDOM.render(
   <div>
      <Metas title={title} description={description} />
      <Favicon />
      <BrowserRouter>
         <Route component={App} />
      </BrowserRouter>
   </div>
   ,
   document.getElementById('root')
);
