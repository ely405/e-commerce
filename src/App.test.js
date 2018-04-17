import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from "enzyme";
/*
  * shallow --> prueba el componente de forma aislada, sin renderizar los subcomponentes que tenga,
    ni ejecuta los métodos de ciclo de vida
  * render --> renderiza los componentes a HTML stático, incluye los subcomponentes
    y analiza la estructura HTML
  * mount --> utiliza el JSDOM, para renderizsr los subcomponentes, probar la interacción
    con API's del DOM o probar el ciclo de vida completo del componente
*/
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
