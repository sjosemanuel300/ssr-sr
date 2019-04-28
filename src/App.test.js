import React from 'react';
import {shallow} from 'enzyme/build';
import App from './App';

describe('App tests', () => {

  it('mounts without crashing', () => {
    const wrapper = shallow(<App />);
    wrapper.unmount()
  });
  
});