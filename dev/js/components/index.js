import React, {Component} from 'react';
import {Col, Row, Grid, xs, sm, md} from 'react-bootstrap';
import LandingPage from './movies';
import AboutMovies from './aboutMovie';
import MainPage from './mainPage';
import axios from 'axios';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
       movies: []
    };
  }

  componentDidMount (){
 
   }

  render(){
        return(
            <div>
              <MainPage />
            </div>
        );
      }
}


export default App;
