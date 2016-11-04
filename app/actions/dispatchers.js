/**
* @Author: rajasekhar
* @Date:   2016-11-03T17:56:36+05:30
* @Last modified by:   rajasekhar
* @Last modified time: 2016-11-04T20:32:50+05:30
*/



import {
  NUMBER_INPUT,
  NUMBER_SIGNED_INPUT,
  DECIMAL_INPUT,
  OPERATION_INPUT,
  UNDO,
  CALCULATE
} from './types';

export function inputNumber(value){
  // console.log("inputNumber " + value);

  return {
    type: NUMBER_INPUT,
    value
  };
}

export function inputSigned(){
  return {
    type: NUMBER_SIGNED_INPUT
  };
}

export function inputDecimal(){
  return {
    type: DECIMAL_INPUT
  };
}

export function performOperation(operation, symbol){
  return {
    type: OPERATION_INPUT,
    operation,
    symbol
  };
}

export function undo(){
  return {
    type: UNDO
  };
}

export function calculate(){
  return {
    type: CALCULATE
  };
}
