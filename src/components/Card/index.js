import React, {Component} from 'react';
import './styles.scss';

export class Card extends Component {
   render() {
      const style = {
         borderRadius: this.props.radius
      }
      const classes = 'card '+this.props.className
      return (
         <div className={classes} style={style}>
            <div className="card-content">
               {this.props.children}
            </div>
         </div>
      );
   }
}

export class CardFeature extends Component {
   render() {
      return (
         <Card radius={this.props.radius} className="feature">
            <img src={this.props.icon} className="icon" alt={this.props.title} />
            <p className="tk-museo-sans-rounded feature-title">{this.props.title}</p>
            <p className="grey-text darken-4">{this.props.children}</p>
         </Card>
      );
   }
}
