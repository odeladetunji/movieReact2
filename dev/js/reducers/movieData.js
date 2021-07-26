import React, {Component} from 'react';

const initialState ={ movie : {}}

export default (state = initialState, action) => {
     switch(action.type){
        case 'Movie Data':
           return  Object.assign({}, state, {
                       movie: action.payload.amovie
                   });
        break;
     }

     return state
}
