/**
* @Author: rajasekhar
* @Date:   2016-11-03T04:34:56+05:30
* @Last modified by:   rajasekhar
* @Last modified time: 2016-11-04T18:42:33+05:30
*/



import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RexCalcApp from './RexCalc';

export default class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <RexCalcApp />
      </Provider>
    );
  }
}
