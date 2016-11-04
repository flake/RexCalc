/**
* @Author: rajasekhar
* @Date:   2016-11-03T19:18:41+05:30
* @Last modified by:   rajasekhar
* @Last modified time: 2016-11-04T22:30:38+05:30
*/



import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class CalcScreen extends Component{
  getOutput() {
    // console.log("getOutput " + JSON.stringify(props));
    let { currentInput, history } = this.props.calculations;
    if (currentInput.length === 0 && history.length === 0) {
      // console.log("returning output 0");
      return 0
    } else if (currentInput.length === 0) {
      return this.props.calculations.aggregate;
    } else {
      // console.log("returning output " + currentInput.join(''));
      return currentInput.join('');
    }
  }

  render(){
    return (
      <View style={styles.view}>
        <Text style={styles.screen}>{this.getOutput()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: '#999',
    borderStyle: 'solid',
    padding: 16,
    marginRight: 16,
    marginLeft: 16
  },
  screen: {
    fontSize: 24
  }
});
