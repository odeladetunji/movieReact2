import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import movieData from '../actions/movieData';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Ratings from './ratings';

class AboutMovies extends Component{

    constructor(props, context){
        super(props);
        this.state = {
           
        };
    }

    render(){
        console.log(this.props.movieData.movie.show)
        return(
            <div className="">
                 <div className="">
                  <div className="searchPageHeader">
                       <NavLink to="/" style={{textDecoration: "none"}}>
                       <button>Home</button> </NavLink>
                 </div>
              </div>
                 <div className="aboutMainPage">
                      <div className="sidePart">
                          <div className="moviePicture" style={{backgroundImage: "url(" + '"' + this.props.movieData.movie.show.image.original + '"'}}>
      
                          </div>
                      </div>
                      <div className="aboutMovies">
                      <p className="aboutMovieTitle">{this.props.movieData.movie.show.name}</p>
                      <p className="movieAuthor">{this.props.movieData.movie.show.network.name} </p>
                      <p className="movieDate">{this.props.movieData.movie.show.premiered}</p>
                      <hr></hr>
                      <div className="genreAndTags">
                          <div className="items">
                               <p className="title">Ratings</p>
                               <span class="fa fa-star checked"></span>
                               <span class="fa fa-star checked"></span>
                               <span class="fa fa-star checked"></span>
                               <span class="fa fa-star"></span>
                               <span class="fa fa-star"></span>
                          </div>
                          <div className="items">
                               <p className="title">Author</p>
                               <p>Elizerbeth Grandji</p>
                          </div>
                          <div className="items">
                               <p className="title">Released</p>
                               <p>{this.props.movieData.movie.show.premiered}</p>
                          </div>
                          <div className="items">
                               <p className="title">Tags</p>
                               <p>{this.props.movieData.movie.show.genres[0]}</p>
                          </div>
                          <div className="items">
                               <p className="title">Status</p>
                               <p>{this.props.movieData.movie.show.status}</p>
                          </div>
                      </div>
      
                      <div className="moviePicture">
      
                      </div>
      
                      <ul className="casts">
                          <li className="title">Main Cast</li>
                          <li>James Bond</li>
                          <li>Alexander Fleming  </li>
                      </ul>
      
                      <p className="summary">
                          {this.props.movieData.movie.show.summary}
                      </p>
                 </div>
                 </div>
                 
            </div>
         )
    }
}

function mapStateToProps(state){
    // console.log(state.movieData, '>>>>>>>>>>>>>')
    return {
      movieData: state.movieDataReducer
    }
}
  
function matchDispatchToState(dispatch){
    return bindActionCreators({
        movieDataReducer: movieData
    }, dispatch);
}
  
export default connect(mapStateToProps, matchDispatchToState)(AboutMovies);





