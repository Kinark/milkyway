import React, {Component} from 'react';
import './styles.scss';

export default class Member extends Component {
   render() {
      const { picture, name, position, children, rightAlign } = this.props;
      let pictureStyle, infoStyle = {}
      let pictureClasses = 'pictureHolder';
      let infoClasses = 'infoHolder col-xs';
      if(rightAlign) {
         pictureClasses += ' rightAlign';
         infoClasses += ' rightAlign';
      }
      return (
         <div className="member">
            <div className={pictureClasses} >
               <div className="picture"><img src={picture} alt=""/></div>
            </div>
            <div className={infoClasses} >
               <div className="name">{name}</div>
               <div className="position">{position}</div>
               <div className="description">{children}</div>
            </div>
         </div>
      );
   }
}
