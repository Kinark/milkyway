import React, {Component} from 'react';
import './styles.scss';

import {Card} from '~/components/Card'

import { isLoggedIn } from '~/utils/isLoggedIn.js';
import { Redirect } from 'react-router-dom';

export default class Clientes extends Component {
   render() {
      if (!isLoggedIn()) {
         return <Redirect to="/login" />;
      }
      return (
         <div>
            <Card>
               aaaaa
            </Card>
         </div>
      );
   }
}
