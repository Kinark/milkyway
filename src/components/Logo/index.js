import React, {Component} from 'react';
import logo from './images/logo.svg';
// import logoShort from './images/logo-short.svg';
import './styles.scss';

class Logo extends Component {
   render() {
      const style ={
         height: this.props.height,
      }
      const Name = 'Coperni';
      return (
         <img src={logo} alt={Name} className="Logo" style={style} />
      );
   }
}

export default Logo;
