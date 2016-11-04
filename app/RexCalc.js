/**
* @Author: rajasekhar
* @Date:   2016-11-03T04:36:53+05:30
* @Last modified by:   rajasekhar
* @Last modified time: 2016-11-04T20:23:36+05:30
*/



import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CalcActions from './actions/dispatchers';

import { Toolbar } from 'react-native-material-design';
import CalcScreen from './components/CalcScreen';
import InputPad from './components/InputPad';

function mapStateToProps(state){
  console.log("mapStateToProps state " + JSON.stringify(state));

  return {
    calculations: state.calculations
  };
}

class RexCalc extends Component{
  render(){
    console.log("RexCalc render this.props.calculations " + JSON.stringify(this.props));
    let { dispatch, calculations } = this.props;

    let boundActions = bindActionCreators(CalcActions, dispatch);

    return (
      <View>
        <Toolbar
          title="Calculator"
          icon='menu' />
        <View style={styles.container}>
          <CalcScreen
            calculations={calculations} />
          <InputPad
            {...boundActions} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64
  }
});

export default connect(mapStateToProps)(RexCalc);
