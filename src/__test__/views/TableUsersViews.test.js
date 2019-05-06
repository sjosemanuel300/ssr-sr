import React from 'react';
import {render} from 'enzyme';
import TableUsersViews from '../../views/Users/TableUsersViews.jsx';
import testStore from '../../store/testStore';
import { Provider } from 'react-redux';

const store = testStore;

it('render of the isolated component TableUsersViews', () => {

  store.dispatch({
      type: 'SET_TABLE',
      table: [
        {
          age: 25,
          contractUntil: "2022-06-30",
          dateOfBirth: "1993-05-13",
          jerseyNumber: 9,
          name: "Romelu Lukaku",
          nationality: "Belgium",
          position: "Centre-Forward",
        }
      ]
  });

  const wrapper = render(
    <Provider store={ store }>
      <TableUsersViews/>
    </Provider>
    );

  expect( wrapper.find(".player") ).to.have.lengthOf(1);
});