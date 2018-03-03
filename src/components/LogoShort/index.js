import React, {Component} from 'react';
import logo from './images/logo-short.svg';
// import logoShort from './images/logo-short.svg';
import './styles.scss';

class LogoShort extends Component {
   render() {
      const style ={
         height: this.props.height,
      }
      const Name = 'Coperni';
      return (
         <img src={logo} alt={Name} className="LogoShort" style={style} />
      );
   }
}

export default LogoShort;
