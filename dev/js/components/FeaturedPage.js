import React, {Component} from 'react';
import axios from 'axios';
import {NavLink, Redirect, Route} from 'react-router-dom';
import movieData from '../actions/movieData';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import LandingPage from './movies';

class FeaturedPage extends Component {
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

   this.setState({render: true});
 }

      render(){
        return(
            <div>
             <div className="">
                  <div className="searchPageHeader">
                       <NavLink to="/" style={{textDecoration: "none"}}>
                       <button>Home</button> </NavLink>
                 </div>
              </div>
              <div className="featuredTray">
                {this.theFeauturedMovies()}
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
  
export default connect(mapStateToProps, matchDispatchToState)(FeaturedPage);
  

