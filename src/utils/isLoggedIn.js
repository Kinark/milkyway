import { getJSON } from './getJSON.js';

const loginURL = 'http://localhost:8000/auth/login';
export function isLoggedIn() {
   getJSON(loginURL, ()=>{
      if (err !== null) {
         // this.setState({reviewjson: addition});
      } else {
         return data.loggedIn;
      }
   });
}
