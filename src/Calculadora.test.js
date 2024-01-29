import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './Calculadora';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculadora />, div);
  ReactDOM.unmountComponentAtNode(div);
});
