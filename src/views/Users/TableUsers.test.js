import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import TableUsers from './TableUsers';

describe('TableUsers tests', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><TableUsers/></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});