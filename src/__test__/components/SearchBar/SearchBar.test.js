import React from 'react';
import {render} from 'enzyme/build';
import SearchBar from '../../../components/SearchBar/SearchBar.jsx';
import testStore from '../../../store/testStore';

const store = testStore;

it('render of the isolated component', () => {
  const wrapper = render(<SearchBar store={store}/>);
  expect( wrapper.find(".search").length );
});