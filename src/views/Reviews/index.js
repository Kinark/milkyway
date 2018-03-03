import React, {Component} from 'react';
import './styles.scss';

import { isLoggedIn } from '~/utils/isLoggedIn.js';
import { Redirect } from 'react-router-dom';

export default class Reviews extends Component {
   render() {
      if (!isLoggedIn()) {
         return <Redirect to="/login" />;
      }
      return (
         <div>

         </div>
      );
   }
}
