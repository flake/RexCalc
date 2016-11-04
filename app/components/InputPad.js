/**
* @Author: rajasekhar
* @Date:   2016-11-04T04:13:37+05:30
* @Last modified by:   rajasekhar
* @Last modified time: 2016-11-04T20:35:30+05:30
*/



import React, { Component, StyleSheet } from 'react';
import { View, Text } from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { Button } from 'react-native-material-design';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';

export default class InputPad extends Component{
  render(){
    let { inputNumber, inputSigned, inputDecimal, performOperation, calculate } = this.props;
    // console.log("InputPad inputNumber " + inputNumber);

    return (
      <View>
        <Row size={12}>
          <Col sm={3}>
            <Button text='7' onPress={() => { inputNumber(7);}}></Button>
          </Col>
          <Col sm={3}>
            <Button text='8' onPress={() => { inputNumber(8); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='9' onPress={() => { inputNumber(9); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='/' onPress={() => { performOperation(OPERATION_DIVIDE, '/'); }}></Button>
          </Col>
        </Row>
        <Row size={12}>
          <Col sm={3}>
            <Button text='4' onPress={() => { inputNumber(4); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='5' onPress={() => { inputNumber(5); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='6' onPress={() => { inputNumber(6); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='*' onPress={() => { performOperation(OPERATION_MULTIPLY, '*'); }}></Button>
          </Col>
        </Row>
        <Row size={12}>
          <Col sm={3}>
            <Button text='1' onPress={() => { inputNumber(1); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='2' onPress={() => { inputNumber(2); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='3' onPress={() => { inputNumber(3); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='-' onPress={() => { performOperation(OPERATION_SUBTRACT, '-'); }}></Button>
          </Col>
        </Row>
        <Row size={12}>
          <Col sm={3}>
            <Button text='0' onPress={() => { inputNumber(0); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='.' onPress={() => { inputDecimal(); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='=' onPress={() => { calculate(); }}></Button>
          </Col>
          <Col sm={3}>
            <Button text='+' onPress={() => { performOperation(OPERATION_ADD, '+'); }}></Button>
          </Col>
        </Row>
      </View>
    )
  }
}
