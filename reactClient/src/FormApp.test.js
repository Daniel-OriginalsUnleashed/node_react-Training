import React from 'react';
import ReactDOM from 'react-dom';
import formApp from './formApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
