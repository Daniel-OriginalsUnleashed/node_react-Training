import React from 'react';
import ReactDOM from 'react-dom';
import formApp from './FormApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
