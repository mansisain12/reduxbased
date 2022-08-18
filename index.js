/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import store from './src/store/store';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';


const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
