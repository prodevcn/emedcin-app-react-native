/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import MedicineApp from './src/navigation/index';
import {Provider} from 'react-redux';
import store from './src/store';
import {setCustomText} from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: 'CenturyGothic',
  },
};
export default class App extends Component {
  constructor() {
    super();
    setCustomText(customTextProps);
  }
  render() {
    return (
      <Provider store={store}>
        <MedicineApp />
      </Provider>
    );
  }
}
