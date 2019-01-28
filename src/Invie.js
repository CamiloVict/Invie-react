import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada.jsx';

import Guitarras from './components/Guitarras.jsx';

import Footer from './components/Footer.jsx';

// const data = {
//    menu : [
//     {
//       href: 'index.html',
//       title: 'Home',
//     },
//     {
//       href: '#guitarras',
//       title: 'Guitarras',
//     },
//     {
//       href: 'precios.html',
//       title: 'Precios',
//     },
//   ],

//   logoPortada : logoPortada,

//   guitarras : [
//     {
//       image: guitarraAcustica,
//       alt: 'Guitarra Invie Acustica',
//       name: 'Invie Acustica',
//       features: ['Estilo vintage', 'Madera pura', 'Incluye estuche invisible de aluminio'],
//     },
//     {
//       image: guitarraClassic,
//       alt: 'Guitarra Invie Classic',
//       name: 'Invie Classic',
//       features: [
//             'Estilo vintage',
//             'Liviana',
//             'Empieza tu camino como rockstar']
//     }
//   ]
// }



class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/* Portada */}
        {/* <Portada menu = {data.menu} logo = {data.logoPortada}/> */}
        <Portada/>

        {/* Guitarras */}
        {/* <Guitarras guitarras = {data.guitarras}/> */}
        <Guitarras/>

        {/* Footer */}
        <Footer/>

      </section>
    );
  }
}

export default App;
