import React, {Component} from 'react';
import Flickity from 'react-flickity-component';
import './styles.scss';
import { Card } from '~/components/Card';

export default class Reviews extends Component {
   render() {

      let REVIEWS = [];
      if(!this.props.data) {
         for (const i=0; i < 6; i++) {
            REVIEWS.push(
               {
                  id: i,
                  avatar: 'https://i.imgur.com/npZDtHd.png',
                  name: 'Daryl Dixon',
                  position: 'Caçador foda',
                  message: 'Se você der só um gole antes de levarmos os remédios para o nosso pessoal, vou ACABAR com a sua raça. Entendeu?'
               }
            );
         }
      } else {
         REVIEWS = this.props.data.reviews
      }

      const flickityOptions = {
         initialIndex: 1,
         groupCells: '60%',
         pageDots: false,
         prevNextButtons: false,
         wrapAround: true,
      }
      return (
         <div className="carousel-holder">
            <Flickity options={flickityOptions} >
               {REVIEWS.map(i => (
                  <Card radius="33px" key={i.id} className="review">
                     <div className="avatar">
                        <img src={i.avatar} alt={i.name}/>
                     </div>
                     <div className="info">
                        <div className="name">
                           {i.name}
                        </div>
                        <div className="position">
                           {i.position}
                        </div>
                        <div className="message">
                           {i.message}
                        </div>
                     </div>
                  </Card>
               ))}
            </Flickity>
         </div>
      )
   }
}
