import React from 'react';
import {shallow} from 'enzyme/build';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

it('mounts without crashing', () => {
  const wrapper = shallow(
    <Provider store={ store }>
      <App />
    </Provider>
    );
  wrapper.unmount()
});