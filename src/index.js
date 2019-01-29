import React from 'react';
import ReactDOM from 'react-dom';
import Invie from './Invie';
import {Provider} from 'react-redux;'
import {createStore} from 'redux';

import './index.css';

import cheet from 'cheet.js';
import logoPortada from './images/invie.png';
import guitarraClassic from './images/invie-classic.png';
import guitarraAcustica from './images/invie-acustica.png';

import * as serviceWorker from './serviceWorker';

const initialState = {
    menu : [
     {
       href: 'index.html',
       title: 'Home',
     },
     {
       href: '#guitarras',
       title: 'Guitarras',
     },
     {
       href: 'precios.html',
       title: 'Precios',
     },
   ],
 
   logoPortada : logoPortada,
 
   guitarras : [
     {
       image: guitarraAcustica,
       alt: 'Guitarra Invie Acustica',
       name: 'Invie Acustica',
       features: ['Estilo vintage', 'Madera pura', 'Incluye estuche invisible de aluminio'],
     },
     {
       image: guitarraClassic,
       alt: 'Guitarra Invie Classic',
       name: 'Invie Classic',
       features: [
             'Estilo vintage',
             'Liviana',
             'Empieza tu camino como rockstar']
     }
   ]
 }

 function reducer(state, action){
    switch(action.type){
        case 'UPDATE_PROPS': {
          const newProps =  action.payload.props;
          return{...state, ...newProps}
        }
        default:
        return state;
    }
 }

 const store = createStore(reducer, initialState);
 const easter = {
    menu : [
        {
          href: 'index.html',
          title: 'Home',
        }
    ]
 }

 cheet('i n v i e', () => {
    // console.log('Lo lograste');
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props:easter,
        }
    });
  });
  
  cheet('g o b a c k', () => {
    // console.log('Pa tras');
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: initialState,
        }
    });
  });

ReactDOM.render(
    <Provider store = {store}>
        <Invie/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
