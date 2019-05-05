import React from 'react';
import {shallow} from 'enzyme/build';
import SearchBar from '../../../components/SearchBar/SearchBar.jsx';

it('render of the isolated component', () => {
  const wrapper = shallow(<SearchBar/>);
  expect( wrapper.find('.search').length ).toBe(0);
});