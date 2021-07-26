import React, {Component} from 'react';
import LandingPage from './movies';
import axios from 'axios';
import {NavLink, Redirect, Route} from 'react-router-dom';
import movieData from '../actions/movieData';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
       movies: [],
       render: false
    };
  }

   displayMovies = () => {
     
        let listOfMovies = this.state.movies.map(data => {

            let newData = data;
            if(data.show.image == null) {
              newData.show.image = {};
              newData.show.image.original = "";
            }

            if(data != null)
    
            return <LandingPage amovie={newData} onClick={this.moveToNextPage} render={this.state.render} />
            
        });
        
        return listOfMovies;
        
        // this.setState({movies: listOfMovies})
        
   }

moveToNextPage = (data) => { 
    this.props.movieData({
         'type': 'Movie Data',
         'payload': data
    });

   this.setState({render: true});

 }

   queryApi = (event) => {
    axios({
      method: "GET", 
      url: "https://api.tvmaze.com/search/shows?q=" + '"' + event.target.value + '"',
      headers: { "Content-Type": "application/json" },
     })
     .then(response=>{
       console.log(response)
       this.setState({movies: response.data})
    //    this.setState({visibility: "visible"})
       this.displayMovies();
      }).catch(err=>{ 
       console.log(err);
      })
   }

      render(){
        return(
            <div>
              <div className="">
                  <div className="searchPageHeader">
                  <NavLink to="/" style={{textDecoration: "none"}}>
                       <button>Home</button> 
                  </NavLink>
                  <input type="text" placeholder="search for movies" onChange={this.queryApi}></input>
                 </div>
              </div>
              <div className="trayItems">
                 {this.displayMovies()}
              </div>
            </div>
        );
      }
}

function mapStateToProps(state){
    return {
      movieData: state.movieData
    }
}
  
function matchDispatchToState(dispatch){
    return bindActionCreators({
       movieData: movieData
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(App);
  
