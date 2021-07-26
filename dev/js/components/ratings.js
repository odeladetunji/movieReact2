import React, {Component} from 'react';

export default (props) => {
    function generateRatings(value){
        if(Math.ceil(value) < 1){
          return <p className="movieRatingIcons">
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          </p>
       }
    
       if(Math.ceil(value) == 1){
           return <p className="movieRatingIcons">
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
           </p>
        }
    
        if(Math.ceil(value) == 2){
          return <p className="movieRatingIcons">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          </p>
       }
    
       if(Math.ceil(value) == 3){
        return <p className="movieRatingIcons">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </p>
       }
    
       if(Math.ceil(value) == 4){
        return <p className="movieRatingIcons">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        </p>
       }
    
       if(Math.ceil(value) > 4){
        return <p className="movieRatingIcons">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        </p>
       }
    }

    
    return (generateRatings(props.value))
    
}
