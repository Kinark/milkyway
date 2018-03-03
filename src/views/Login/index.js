import React, {Component} from 'react';
import './styles.scss';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '~/utils/isLoggedIn.js';
import { getJSON } from '~/utils/getJSON.js';
import { postData } from '~/utils/postData.js';

export default class Pedidos extends Component {
   constructor(){
      super();
      this.state = {
         email: '',
         password: '',
         redirectToReferrer: false
      };
      this.login = this.login.bind(this);
      this.onChange = this.onChange.bind(this);
   }
   onChange(e){
      this.setState({[e.target.name]:e.target.value});
   }
   onSubmit(e) {
      e.preventDefault();
      // login();
      // const { email, password } = this.state;
      // const { history } = this.props;
      // alert(password);
      // this.setState({ error: false });
      //
      // if (!(username === 'george' && password === 'foreman')) {
      //    return this.setState({ error: true });
      // }
      //
      // store.set('loggedIn', true);
      // history.push('/');
   }
   // login() {
   //    const loginURL = 'http://localhost:8000/auth/login';
   //    getJSON(loginURL, ()=>{
   //       if (err !== null) {
   //          // this.setState({reviewjson: addition});
   //       } else {
   //          return data.loggedIn;
   //       }
   //    });
   // }

   login() {
      if(this.state.username && this.state.password){
         postData('login',this.state).then((result) => {
            let responseJson = result;
            if(responseJson.userData){
               sessionStorage.setItem('userData',JSON.stringify(responseJson));
               this.setState({redirectToReferrer: true});
            }
         });
      }
   }
   render() {
      // if(this.state.redirectToReferrer) {
      //    if (isLoggedIn()) {
      //       return <Redirect to="/" />;
      //    }
      // }
      return (
         <div>
            <form onSubmit={this.onSubmit}>
               <input type="text" name="email"  onChange={this.onChange}/>
               <input type="password" name="password"  onChange={this.onChange}/>
               <input type="submit"/>
            </form>
         </div>
      );
   }
}
