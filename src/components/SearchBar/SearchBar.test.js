import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

describe('TableUsers tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
