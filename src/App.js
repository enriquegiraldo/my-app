import React from 'react';
import HomePage from './components/HomePage';
import $ from 'jquery';
window.jQuery = window.$ = $;

// Professional store image selection
const topImages = [
  'imagenes_tienda/tecnologia-innovacion.jpg',
  'imagenes_tienda/servicios-digitales.jpg',
  'imagenes_tienda/consultoria-tecnologica.png',
  'imagenes_tienda/desarrollo-web.png'
];

const bottomImages = [
  'imagenes/software-desarrollo.jpg',
  'imagenes/marketing-digital.jpg',
  'imagenes/diseno-web.jpg',
  'imagenes/cloud-computing.jpg'
];

const topLinks = [
  '/servicios/innovacion',
  '/servicios/digitales',
  '/servicios/consultoria',
  '/servicios/desarrollo-web'
];

const bottomLinks = [
  '/productos/software',
  '/productos/marketing',
  '/productos/diseno',
  '/productos/cloud'
];

function App() {
  return (
    <div className="App">
      <HomePage
        pageTitle="CENTRO DE INNOVACIÓN TECNOLÓGICA"
        topTitle="NUESTROS SERVICIOS PROFESIONALES"
        bottomTitle="EXPLORA NUESTROS PRODUCTOS DIGITALES"
        topImages={topImages}
        bottomImages={bottomImages}
        topLinks={topLinks}
        bottomLinks={bottomLinks}
      />
    </div>
  );
}

export default App;