import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import TableUsersViews from './TableUsersViews';

describe('TableUsersViews tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><TableUsersViews/></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});