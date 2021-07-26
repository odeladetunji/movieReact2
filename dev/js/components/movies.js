import React, {Component} from 'react';
import {NavLink, Redirect, Route, Link, R} from 'react-router-dom';
import Ratings from './ratings';

export default (props) => {
  // console.log(props.amovie.show.rating.average)
  const isRendered = props.render;
  const featured = props.featured;
  const moveToFeatured = props.moveToFeatured;
  let element;
  if (isRendered) {
    // element = <Redirect to="/about"/>
    element = <Redirect
    to={{
      pathname: "/about"
    }}
  />

  } else if(moveToFeatured){
    element = <Redirect
    to={{
      pathname: "/featured"
    }}
  />
  } else if(featured) {
    element =  <div className="itemCover" onClick={() => props.onClick(props)} style={{display: props.displayMovie}}>
         
    <div className="leftSide" style={{backgroundImage: "url(" + '"' + props.amovie.show.image.original + '"'}}>

    </div>
    <div className="rightSide">
      <p className="movieTitle">{props.amovie.show.name}</p>
      <p className="movieActorAndClass">Edmunm Lous<span>-2009</span></p>
      <p className="movieActorAndClass">Comedy</p>
      <p className="movieRating">Ratings: <span>{props.amovie.show.rating.average}</span></p>
      {<Ratings value={props.amovie.show.rating.average}/>}
      <p className="movieStatusAndRuntime">Status: <span className="movieEnded"> {props.amovie.show.status} </span> Runtime:<span className="movieEnded"> {props.amovie.show.runtime}</span></p>
      <button>featured</button>
    </div>

    
</div>
  }else {
    element =  <div className="itemCover" onClick={() => props.onClick(props)} style={{display: props.displayMovie}}>
         
    <div className="leftSide" style={{backgroundImage: "url(" + '"' + props.amovie.show.image.original + '"'}}>

    </div>
    <div className="rightSide">
      <p className="movieTitle">{props.amovie.show.name}</p>
      <p className="movieActorAndClass">Edmunm Lous<span>-2009</span></p>
      <p className="movieActorAndClass">Comedy</p>
      <p className="movieRating">Ratings: <span>{props.amovie.show.rating.average}</span></p>
      {<Ratings value={props.amovie.show.rating.average}/>}
      <p className="movieStatusAndRuntime">Status: <span className="movieEnded"> {props.amovie.show.status} </span> Runtime:<span className="movieEnded"> {props.amovie.show.runtime}</span></p>
    </div>

    
</div>
  }
   return(
      element
   )
}



