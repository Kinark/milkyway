import React, {Component} from 'react';
import './styles.scss';

import { Card } from '~/components/Card';
import { AwsChecklist, AwsItem } from '~/components/AwsChecklist';

import { isLoggedIn } from '~/utils/isLoggedIn.js';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {
   render() {
      if (!isLoggedIn()) {
         // return <Redirect to="/login" />;
      }
      return (
         <div>
            <div className="row">
               <div className="col-md-8">
                  <Card>
                     Irure est litteris an labore, incididunt minim te ullamco arbitrantur se summis
                     eu admodum o culpa, est laboris ad consequat, litteris voluptatibus est commodo,
                     aut hic exercitation, officia aliqua aute id dolor, noster expetendis de
                     singulis.
                  </Card>
               </div>
               <div className="col-md-4">
                  <Card>
                     Irure est litteris an labore, incididunt minim te ullamco arbitrantur se summis
                     eu admodum o culpa, est laboris ad consequat, litteris voluptatibus est commodo,
                     aut hic exercitation, officia aliqua aute id dolor, noster expetendis de
                     singulis.
                  </Card>
               </div>
               <div className="col-md-12">
                  <Card>
                     Irure est litteris an labore, incididunt minim te ullamco arbitrantur se summis
                     eu admodum o culpa, est laboris ad consequat, litteris voluptatibus est commodo,
                     aut hic exercitation, officia aliqua aute id dolor, noster expetendis de
                     singulis.
                  </Card>
               </div>
               <div className="col-md-12">
                  <Card>
                     Irure est litteris an labore, incididunt minim te ullamco arbitrantur se summis
                     eu admodum o culpa, est laboris ad consequat, litteris voluptatibus est commodo,
                     aut hic exercitation, officia aliqua aute id dolor, noster expetendis de
                     singulis.
                  </Card>
               </div>
               <div className="col-md-12">
                  <Card>
                     <AwsChecklist>
                        <AwsItem>Tarefa show 1</AwsItem>
                        <AwsItem>Tarefa show 2</AwsItem>
                        <AwsItem>Tarefa show 3</AwsItem>
                        <AwsItem>Tarefa show 4</AwsItem>
                     </AwsChecklist>
                  </Card>
               </div>
            </div>
         </div>
      );
   }
}
