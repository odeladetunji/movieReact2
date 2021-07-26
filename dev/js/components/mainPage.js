import React, {Component} from 'react';
import axios from 'axios';
import {NavLink, Redirect, Route} from 'react-router-dom';
import movieData from '../actions/movieData';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import LandingPage from './movies';

class MainPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
       movies: [],
       render: false,
       featuredMovies: [],
       moveToFeatured: false
    };
  }

  componentDidMount (){
    axios({
     method: "GET", 
     url: "https://api.tvmaze.com/search/shows?q=movies",
     headers: { "Content-Type": "application/json" },
    })
    .then(response=>{
      this.setState({movies: response.data})
      this.displayMovies();
     }).catch(err=>{ 
      console.log(err);
     })

     axios({
      method: "GET", 
      url: "http://127.0.0.1:8025/getmovies",
      headers: { "Content-Type": "application/json" },
     })
     .then(response=>{
       this.setState({featuredMovies: response.data})
       console.log(response.data)
       this.theFeauturedMovies();
      }).catch(err=>{ 
       console.log(err);
      })
   }

    theFeauturedMovies = () => {
      
      let listOfMovies = this.state.featuredMovies.map(data => {
        console.log(data.data);
        let newData = data.data;
        if(data.data.show.image == null) {
          newData.show.image = {};
          newData.show.image.original = "";
        }
        if(data != null)
        return <LandingPage amovie={newData} onClick={this.moveToFeaturedPage} moveToFeatured={this.state.moveToFeatured} featured={true} render={this.state.render}/>
        
    });
    return listOfMovies;
   }

 moveToFeaturedPage = (data) => {
    this.props.movieData({
      'type': 'Movie Data',
      'payload': data
    });

   this.setState({moveToFeatured: true});
 }

   moveToNextPage = (data) => {
      this.props.movieData({
           'type': 'Movie Data',
           'payload': data
      });

     this.setState({render: true});

   }

   displayMovies = () => {
        let listOfMovies = this.state.movies.map(data => {

            let newData = data;
            if(data.show.image == null) {
              newData.show.image = {};
              newData.show.image.original = "";
            }
            if(data != null)
            return <LandingPage amovie={newData} onClick={this.moveToNextPage} featured={false} render={this.state.render}/>
            
        });
        return listOfMovies;
   }

      render(){
        return(
            <div>
             <div className="">
                  <div className="searchPageHeader">
                       <NavLink to="/search" style={{textDecoration: "none"}}>
                       <button>search movies</button> </NavLink>
                 </div>
              </div>
              <div className="featuredTray">
                {this.theFeauturedMovies()}
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
  
export default connect(mapStateToProps, matchDispatchToState)(MainPage);
  

